import requests
from stellar_sdk import Keypair

def criar_conta_teste():
    keypair = Keypair.random()
    public_key = keypair.public_key
    secret_key = keypair.secret
    
    print("Nova conta gerada:")
    print(f"Chave Pública:  {public_key}")
    print(f"Chave Secreta:  {secret_key}")
    print()
    
    resposta = input("Deseja financiar esta conta com 10,000 XLM de teste? (s/n): ").strip().lower()
    
    if resposta in ['s', 'sim', 'y', 'yes']:
        friendbot_url = f"https://friendbot.stellar.org?addr={public_key}"
        try:
            response = requests.get(friendbot_url)
            if response.status_code == 200:
                print("Conta financiada com sucesso!")
            else:
                print(f"Erro ao financiar conta: {response.status_code}")
        except Exception as e:
            print(f"Erro na requisição: {e}")
    else:
        print("Conta criada, mas não financiada.")
    
    print()

if __name__ == "__main__":
    criar_conta_teste()
