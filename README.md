# Retorno de dados fakes de uma pessoa

Uma API simples para gerar dados fictícios de pessoas usando Nest.js e Faker.js.

## Como Executar

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Em seguida, siga as etapas abaixo:

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    npm run start
    ```

4. **Acesse a documentação da API Swagger em:**

    ```
    http://localhost:3000/api/
    ```

## Rotas da API

### `GET /fake-data`

Retorna dados fictícios de uma pessoa.

Exemplo de resposta:

```json
{
  "pessoa": {
    "name": "Everton da Silva",
    "age": 25,
    "birthdate": "01/02/1998"
  }
}
