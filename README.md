# Stellar Analytics - Relatórios Inteligentes da Blockchain

Bem vindo ao sistema que gera relatórios inteligentes de contas da blockchain Stellar usando Inteligência Artificial! O projeto combina dados em tempo real da rede Stellar com análise por IA para criar insights compreensíveis sobre carteiras e transações.

## Sobre o Projeto

Este projeto é composto por:

- **Frontend React**: Interface moderna e responsiva para visualização dos relatórios
- **Backend FastAPI**: API robusta que processa dados da blockchain Stellar
- **Sistema RAG**: Inteligência Artificial que gera relatórios em linguagem natural
- **Integração Stellar**: Conexão direta com a rede Stellar para dados em tempo real

## Como Rodar o Projeto

### Pré-requisitos

- **Python 3.11+** instalado
- **Node.js 18+** e npm instalados
- **Git** para clonar o repositório

### 1. Clone o Repositório

```bash
git clone https://github.com/rafael-tagliamento/esquenta-block-chain.git
cd esquenta-block-chain
```

### 2. Configurar o Backend

```bash
# Navegue para o diretório do backend
cd backend

# Instale as dependências Python
pip install uv
uv sync

# Configure a API do Groq (obrigatório)
cp .env.example .env
# Edite o arquivo .env conforme explicado nele e adicione sua chave da API do Groq

# Execute o servidor FastAPI
uvicorn main:app --reload --port 8000
```

O backend estará disponível em: `http://localhost:8000`
Documentação da API: `http://localhost:8000/docs`

### 3. Configurar o Frontend

Em um **novo terminal**:

```bash
# Navegue para o diretório do frontend
cd frontend

# Instale as dependências Node.js
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`


## Autores

- **Rafael Tagliamento** - [@rafael-tagliamento](https://github.com/rafael-tagliamento)

- **Miguel Ramos** - [@miguel-pramos](https://github.com/miguel-pramos)

- **Matheus Veiga** - [@mvl18](https://github.com/mvl18)

---