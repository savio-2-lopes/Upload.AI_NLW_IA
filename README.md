<h1 align="center" style="text-align: center;">
  Upload.ai - NLW IA
</h1>

<p align="center">
  <a href="#project">Projeto</a>   |   
  <a href="#technologies">Tecnologias</a>   |   
  <a href="#usage">Utilização</a>   |   
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

`<br>`


`<h2 id="project">`📁 Projeto `</h2>`

Este aplicação desenvolvida durante a NLW IA, disponibilizada pela [Rocketseat](https://www.rocketseat.com.br) possibilita o envio de vídeos, aproveitando a API de inteligência artificial da OpenAI para transcrevê-los. Essa transcrição é então utilizada para gerar de forma automática títulos e descrições de vídeos, fornecendo um valioso auxílio aos criadores de conteúdo do YouTube, ao criar esses elementos com base na transcrição do conteúdo dos vídeos.



`<br>`



`<h2 id="technologies">`💻 Tecnologias `</h2>`

Este projeto foi desenvolvido utilizando tecnologias como:

- Node.js
- TypeScript
- Fastify
- Prisma
- Dotenv
- OpenAI
- Zod



`<br>`


```
<h2 id="`usage`">💡 Utilização</h2>
```

Necessário criar uma conta no site [OpenAI](https://openai.com/), obtenha sua chave da API e preencha o campo OPENAI_KEY com sua chave.

Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/savio-2-lopes/upload-ai-api
```

2. Acesse a pasta do projeto:

```
$ cd upload-ai-api
```

3. Instale as dependências:

```
$ npm install
```

4. Execute as migrações:

```
$ npx prisma migrate dev
```

5. Inicie o servidor:

```
$ npm run dev
```

⚠️ **Importante**: Crie um arquivo .env de acordo com o arquivo .env.example.


`<br>`


<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.



`<br>`


Feito com 💜 by Savio Lopes in the NLW marathon [Rocketseat](https://www.rocketseat.com.br)

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/savio-lopes/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:savioaugulopes@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
</div>
