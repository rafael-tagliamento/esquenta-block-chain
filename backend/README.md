# Backend — Stellar RAG API (FastAPI)

API em FastAPI que coleta dados de uma conta Stellar (testnet) e gera um relatório em linguagem natural usando um modelo via Groq.

## Visão geral

-   Conecta no Horizon da Stellar para obter dados de conta e transações recentes.
-   Usa um gerador de linguagem (Groq) para produzir um relatório textual com análise dos dados.
-   Exposto via FastAPI com um endpoint simples para geração de relatório.

## Arquitetura

-   `stellar_connector.py`
    -   `StellarDataRetriever`: encapsula o acesso ao Horizon (por padrão: testnet `https://horizon-testnet.stellar.org`).
    -   Métodos principais: `get_account_data(account_id)` e `get_recent_transactions(account_id, limit)`.
-   `rag.py`
    -   `ReportGenerator`: usa o cliente Groq para gerar texto a partir de um prompt estruturado.
    -   `RAGSystem`: orquestra os dados recuperados + geração do relatório.
-   `main.py`
    -   FastAPI app. Orquestra as chamadas e expõe o endpoint HTTP.

## Requisitos

-   Python 3.13+
-   Gerenciador de dependências: `uv` (recomendado) ou alternativa equivalente
-   Conta/Token da Groq: variável de ambiente `GROQ_API_KEY`

## Instalação

Dentro da pasta `backend/`:

```bash
# Instalar dependências (uv usa pyproject.toml e uv.lock)
uv sync
```

Se preferir pip/venv, adapte conforme seu fluxo (não mantemos instruções oficiais aqui).

## Configuração

Defina o token da Groq no seu shell (zsh) antes de executar a API:

```bash
export GROQ_API_KEY="seu-token-da-groq"
```

Rede Stellar utilizada: por padrão, testnet. Para usar mainnet, edite `HORIZON_URL` em `stellar_connector.py` para `https://horizon.stellar.org`.

## Execução

Ainda em `backend/`:

```bash
# Executar a API com recarregamento automático
uv run uvicorn main:app --reload
```

A API subirá (por padrão) em `http://127.0.0.1:8000`.

-   Documentação interativa (OpenAPI/Swagger): `http://127.0.0.1:8000/docs`

## Endpoints

-   GET `/generate-report`
    -   Parâmetros (query):
        -   `account_id` (string) — obrigatório. ID da conta Stellar (G...)
    -   Resposta (200):
        -   `account_id`: string
        -   `balance`: lista de saldos retornados pelo Horizon
        -   `report`: string (relatório em linguagem natural)

Exemplo de chamada:

```bash
curl -G \
  --data-urlencode "account_id=GAIH3ULLFQ4DGSECF2AR555KZ4KNDGEKN4AFI4SU2M7B43MGK3QJZNSR" \
  http://127.0.0.1:8000/generate-report
```

Resposta (exemplo simplificado):

```json
{
	"account_id": "GAIH3U...ZNSR",
	"balance": [{ "asset_type": "native", "balance": "9999.9999900" }],
	"report": "A conta possui saldo XLM ... resumo das transações ... observações de segurança ..."
}
```

Códigos de erro:

-   400: conta inválida/inexistente ou erro de validação dos dados retornados
-   500: erro interno (rede, limites, chaves ausentes, etc.)

## Notas importantes

-   Este projeto usa a testnet por padrão para facilitar desenvolvimento.
-   Garanta que `GROQ_API_KEY` está configurado no ambiente antes de iniciar o servidor.
-   O limite de transações retornadas pode ser ajustado em `main.py` e/ou `stellar_connector.py` (parâmetro `limit`).

## Estrutura de pastas (parcial)

```
backend/
  main.py                # App FastAPI (endpoints)
  rag.py                 # RAG (geração de relatório via Groq)
  stellar_connector.py   # Conector Horizon (dados da Stellar)
  pyproject.toml         # Dependências e metadados do projeto
  README.md              # Este arquivo
```

## Desenvolvimento

-   Ajuste o prompt em `rag.py::ReportGenerator` para customizar o estilo/nível de detalhe do relatório.
-   Para alternar rede (mainnet/testnet), altere `HORIZON_URL` em `stellar_connector.py`.
-   Se desejar parametrizar `HORIZON_URL` via variável de ambiente, você pode ler `os.getenv("HORIZON_URL", HORIZON_URL)` e substituir na inicialização do `Server`.
