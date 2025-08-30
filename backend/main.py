from fastapi import FastAPI, HTTPException
from typing import Optional
from rag import RAGSystem
from stellar_connector import StellarDataRetriever

app = FastAPI()

# Inicializar o sistema RAG (configure a chave API do OpenAI)
rag_system = RAGSystem()
stellar = StellarDataRetriever()


@app.get("/generate-report")
def generate_stellar_report(account_id: str):
    """Gera um relatório RAG para uma conta Stellar."""
    try:
        account_data = stellar.get_account_data(account_id)
        transactions = stellar.get_recent_transactions(account_id, 10)

        report = rag_system.generate_account_report(account_data, transactions)
        return {"account_id": account_id, "report": report}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")

