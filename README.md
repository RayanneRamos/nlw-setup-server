<h1 align="center"> NLW Setup - Server </h1>

<p align="center">
  <img alt="nlw-setup-server" src="https://user-images.githubusercontent.com/43352880/217389250-168fbb9b-364f-401f-bd20-7f05c30c0ef5.png" width="100%">
</p>

<p  align='center'>
  <img src='https://img.shields.io/badge/license-MIT-%23835afd' alt='License' />
  <img src='https://img.shields.io/badge/forks-MIT-%23835afd' alt='Forks' />
  <img src='https://img.shields.io/badge/stars-MIT-%23835afd' alt='Stars' />
</p>

<br>

## 💻 Projeto

[NLWSetup] É um projeto desenvolvido durante a [Next Level Week](https://nextlevelweek.com/) apresentado pela [Rocketseat](https://www.rocketseat.com.br/) nos dias 16 de Janeiro a 20 de Janeiro de 2023. O projeto consiste numa interface web e mobile para a criação e visualização de hábitos criados pelo usuário.

  - [x] NLW Setup - Abertura Oficial
  - [x] Aula 01 | Iniciando o projeto de ponta a ponta
  - [x] Aula 02 | Avançando o back end e Front end
  - [x] Aula 03 | Finalizando o layout web e mobile
  - [x] Aula 04 | Conectando a API
  - [x] Aula 05 | O próximo nível
  - [x] NLW Setup - After

## 🧪 Technologies

Esse projeto foi desenvolvido com as seguintes tecnolgias: 
  -[Typescript](https://www.typescriptlang.org/) 
  -[Fastify](https://www.fastify.io/) 
  -[Prisma](https://www.prisma.io/) 
  -[Dayjs](https://day.js.org/) 
  -[Web-push](https://www.npmjs.com/package/web-push) 
  -[Zod](https://www.npmjs.com/package/zod) 
  -[MermaidJS](https://www.npmjs.com/package/@mermaid-js/mermaid-cli)

## 🚀 Instalação

```bash
  # Clone o repositório e entre na pasta do projeto
  $ git clone https://github.com/RayanneRamos/nlw-setup-server.git
  $ cd server
  # Instale as dependências
  $ npm install
  # ou
  $ yarn install
  # Execute a aplicação
  $ npm run dev
  # ou
  $ yarn start
```

## 🧩 Rotas do Server

Aqui você encontra todas as rotas disponíveis na aplicação.

  - `POST http://localhost:3333/habits` - Cria um novo hábito
  - `GET http://localhost:3333/day` - Mostra os hábitos disponíveis no dia
  - `PATCH http://localhost:3333/habits/:id/toggle`- Serve para marcar se o hábito foi concluído
  - `GET http://localhost:3333/summary` - Mostra um resumo de todos os hábitos do mês

## 🔥 Desafios
  - [ ] Autenticação (Firebase / Auth)
  - [ ] Notificações Push / Service Worker
  - [ ] Perfil público com gráfico de resumo
  - [ ] Adicionar um tooltip de sucess / error

## 📝 License

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<p align='center'>Criado by Rayanne Ramos</p>
