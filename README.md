# Backend Simples para Portfólio

## Visão Geral

Este backend foi criado para receber e-mails e permitir comentários enquanto o projeto não está hospedado em uma solução mais robusta.

## Tabela de Conteúdo

- [Dependências](#dependencias)
- [Como Usar](#como-usar)
- [Variáveis de Ambiente (Env)](#variaveis-de-ambiente-env)
- [Contato](#contato)

## Dependências

- **axios**: Para fazer requisições HTTP.
- **cors**: Para configurar CORS.
- **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.
- **express**: Framework para criar o servidor.
- **nodemailer**: Para enviar e-mails.

## Como Usar

1. **Instale as dependências**:

    ```bash
    npm install axios cors dotenv express nodemailer
    ```

2. **Inicie o servidor**:

    ```bash
    npm start
    ```

## Variáveis de Ambiente (Env)

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

- **PORT**: A porta em que o servidor irá rodar (por exemplo, `3000` ou qualquer outra porta desejada).
- **EMAIL**: Seu e-mail para envio.
- **EMAIL_PASS**: Sua senha de e-mail.
- **URL**: URL do frontend (por exemplo, `http://localhost:3000` ou `http://127.0.0.1`).

Exemplo de `.env`:

PORT=3000 EMAIL=seuemail@exemplo.com EMAIL_PASS=suaSenha URL=http://localhost:3000


## Contato

Fique à vontade para entrar em contato comigo por meio do meu [e-mail](mailto:danieldetrabalho1@gmail.com) ou visite meu perfil no [GitHub](https://github.com/DanielDeveloperBR).

---

*Obrigado por visitar o meu projeto!
