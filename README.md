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

## Como Usar o Sistema

1. **Acesse a aplicação** em `http://localhost:5173`
2. **Selecione a rede Stellar**:
   - **Testnet**: Para contas de teste (recomendado para primeiros testes)
   - **Mainnet**: Para contas reais com XLM verdadeiro
3. **Cole a chave pública** da conta que deseja analisar
4. **Clique em "Analisar"** e aguarde o relatório ser gerado

### 🧪 Testnet - Rede de Desenvolvimento

#### Como obter uma conta de teste:

**Método 1: Script automático**
```bash
# Execute o script para criar e financiar uma conta
python criar_conta_testnet.py
```

**Método 2: Manual**
1. Acesse o [Stellar Laboratory](https://laboratory.stellar.org/)
2. Vá em "Account Creator" 
3. Clique em "Generate keypair"
4. Copie a **chave pública** (começa com `G`)
5. Financie a conta no [Friendbot](https://friendbot.stellar.org/)


### 🌟 Mainnet - Rede Principal

#### Explorando contas reais:

**Visualizar transações**: Acesse o [Stellar Expert](https://stellar.expert/explorer/public) para explorar contas e transações reais da blockchain Stellar.

#### Exemplo de conta Mainnet - SDF (Stellar Development Foundation):
```
GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP
```

## Autores

- **Rafael Tagliamento** - [@rafael-tagliamento](https://github.com/rafael-tagliamento)

- **Miguel Ramos** - [@miguel-pramos](https://github.com/miguel-pramos)

- **Matheus Veiga** - [@mvl18](https://github.com/mvl18)

---