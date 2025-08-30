import os
from typing import Dict, List, Any
from groq import Groq


class ReportGenerator:
    def __init__(self):
        self.client = Groq()

    def generate_report(
        self, account_data: Dict[str, Any], transactions: List[Dict[str, Any]]
    ) -> str:
        """Gera um relatório em linguagem natural baseado nos dados."""

        prompt = f"""
        Com base nos seguintes dados de uma conta Stellar, gere um relatório em linguagem natural:

        Dados da Conta:
        - ID da Conta: {account_data['account_id']}
        - Saldos: {account_data['balances']}
        - Sequência: {account_data['sequence']}
        - Flags: {account_data['flags']}
        - Signatários: {account_data['signers']}

        Transações Recentes ({len(transactions)}):
        {transactions}

        Relatório deve incluir:
        - Resumo do saldo e ativos.
        - Análise das transações recentes.
        - Observações sobre segurança e atividade.
        """

        try:
            response = self.client.chat.completions.create(
                model="llama-3.1-8b-instant",
                messages=[
                    {
                        "role": "system",
                        "content": "Você é um analista financeiro especializado em blockchain Stellar.",
                    },
                    {"role": "user", "content": prompt},
                ],
                max_tokens=1000,
                temperature=0.7,
            )
            content = response.choices[0].message.content
            return content.strip() if content else "Erro: Conteúdo vazio da resposta."
        except Exception as e:
            raise ValueError(f"Erro ao gerar relatório: {str(e)}")


class RAGSystem:
    def __init__(
        self,
    ):
        self.generator = ReportGenerator()

    def generate_account_report(
        self, account_data: Dict[str, Any], transactions: List[Dict[str, Any]]
    ) -> str:
        report = self.generator.generate_report(account_data, transactions)
        return report
