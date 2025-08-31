from typing import Dict, List, Any
from stellar_sdk import Server


class StellarDataRetriever:
    def __init__(self, network: str = "testnet"):
        """
        Inicializa o conector Stellar.
        
        Args:
            network (str): "testnet" para rede de teste ou "mainnet" para rede principal
        """
        if network.lower() == "mainnet":
            self.horizon_url = "https://horizon.stellar.org"
            self.network = "mainnet"
        else:
            self.horizon_url = "https://horizon-testnet.stellar.org"
            self.network = "testnet"
            
        self.server = Server(self.horizon_url)
        print(f"Conectado à rede Stellar: {self.network.upper()} ({self.horizon_url})")

    def get_account_data(self, account_id: str) -> Dict[str, Any]:
        """Busca dados básicos da conta Stellar."""
        try:
            account = self.server.accounts().account_id(account_id).call()
            return {
                "account_id": account_id,
                "balances": account["balances"],
                "sequence": account["sequence"],
                "flags": account["flags"],
                "signers": account["signers"],
            }
        except Exception as e:
            error_str = str(e)
            # Detectar erro de conta não encontrada (404)
            if "404" in error_str or "not_found" in error_str.lower() or "resource missing" in error_str.lower():
                network_name = "Mainnet" if self.network == "mainnet" else "Testnet"
                raise ValueError(f"Conta não existe na rede {network_name}. Verifique se a conta está na rede correta ou se a chave está válida.")
            else:
                raise ValueError(f"Erro ao buscar dados da conta: {error_str}")

    def get_recent_transactions(
        self, account_id: str, limit: int = 10
    ) -> List[Dict[str, Any]]:
        """Busca transações recentes da conta."""
        try:
            transactions = (
                self.server.transactions().for_account(account_id).limit(limit).call()
            )
            return [
                {
                    "id": tx["id"],
                    "hash": tx["hash"],
                    "ledger": tx["ledger"],
                    "created_at": tx["created_at"],
                    "source_account": tx["source_account"],
                    "fee_charged": tx["fee_charged"],
                    "operation_count": tx["operation_count"],
                }
                for tx in transactions["_embedded"]["records"]
            ]
        except Exception as e:
            error_str = str(e)
            # Detectar erro de conta não encontrada (404)
            if "404" in error_str or "not_found" in error_str.lower() or "resource missing" in error_str.lower():
                network_name = "Mainnet" if self.network == "mainnet" else "Testnet"
                raise ValueError(f"Conta não existe na rede {network_name}. Verifique se a conta está na rede correta.")
            else:
                raise ValueError(f"Erro ao buscar transações: {error_str}")
