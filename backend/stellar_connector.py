from typing import Dict, List, Any
from stellar_sdk import Server

HORIZON_URL = "https://horizon.stellar.org"


class StellarDataRetriever:
    def __init__(
        self,
    ):
        self.server = Server(HORIZON_URL)

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
            raise ValueError(f"Erro ao buscar dados da conta: {str(e)}")

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
            raise ValueError(f"Erro ao buscar transações: {str(e)}")
