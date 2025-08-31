from fastapi import FastAPI, HTTPException
from typing import Optional
from rag import RAGSystem
from stellar_connector import StellarDataRetriever
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS para permitir chamadas do frontend (Vite)
origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

rag_system = RAGSystem()
stellar = StellarDataRetriever()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/generate-report")
def generate_stellar_report(account_id: str, network: str = "testnet"):
    """Gera um relatório RAG para uma conta Stellar."""
    try:
        # Criar instância do StellarDataRetriever com a rede especificada
        stellar_instance = StellarDataRetriever(network=network)
        
        account_data = stellar_instance.get_account_data(account_id)
        transactions = stellar_instance.get_recent_transactions(account_id, 10)

        report = rag_system.generate_account_report(account_data, transactions)
        return {
            "account_id": account_id,
            "network": network,
            "balance": account_data["balances"],
            "report": report,
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")
