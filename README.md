<div align="center">
  <h1>Github explorer</h1>
</div>

<p align="center">
  Este projeto foi desenvolvido para o teste de Front-end do KaBuM! Você pode testar em <a href="https://main.d1gc9wggiqlqjj.amplifyapp.com/" target="__blank">Github explorer</a>.
</p>

<p align="center">
  <img src="https://live.staticflickr.com/65535/52239788064_0be071ff65_h.jpg" alt="Github Explorer" />
</p>

## 💻 Projeto

- Os dados foram consumidos da [githubAPI](https://docs.github.com/en/rest)
- Layout base do projeto: [Figma-base](https://www.figma.com/file/HOCmxfrElzLpI75LdzFLia/Github-Explorer?node-id=1%3A373)
- As etapas de desenvolvimento seguiram um template de TodoList do [Notion](https://cyclic-candy-1c5.notion.site/7a0a681be218447c9d303cd9301ca526?v=7d5368ea5f2041979045916bc13b6802)

## ✨ Tecnologias

Foram utilizadas as seguintes tecnologias:

<a href="https://reactjs.org/">
  <img width="50" title="ReactJs" alt="React Logo" src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/react-logo.svg">
</a> &#xa0; &#xa0;

<a href="https://www.typescriptlang.org">
  <img width="60" title="Typescript" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/ts_pscmln.png" alt="Typescript Logo" >
</a> &nbsp;  &nbsp; 


<a href="https://styled-components.com">
  <img width="60" title="Styled Components" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/styled_ohdgkt.png" alt="Styled Components Logo" >
</a> &nbsp;  &nbsp; 

<a href="https://axios-http.com/ptbr/docs/intro">
  <img  width="60" title="Axios" alt="Axios Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/axios_ldoetw.png">
</a> &nbsp; 

<a href="https://eslint.org">
  <img  width="60" title="Eslint" alt="Eslint Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/eslint_bkagnj.png">
</a> &nbsp; 

<a href="https://prettier.io/">
  <img  width="60" title="Prettier" alt="Prettier Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/prettier_cp4meu.png">
</a> &nbsp; 

## 🚀 Como executar

### Clonando o projeto
```bash
$ git clone https://github.com/PabloBorgesMartins/Github-explorer
```
### Entrando no diretório
```bash
$ cd github-explorer
```
### Instalando as dependências
```bash
$ yarn
# ou
$ npm install
```
### Executando o projeto
```bash
$ yarn dev
# ou
$ npm run dev
# O servidor é inicializado em  <http://localhost:3000>
```

## ⚙️ Comandos

- `build`: cria a versão de produção
- `start`: inicia um servidor simples com o código de produção pós build

## 📊 Testes

### ☢️ Google Lighthouse

<p align="center">
  <img src="https://live.staticflickr.com/65535/52239822619_cab3626fc6_w.jpg" alt="Teste Lighthouse" />
</p>
<p align="center">
  <img src="https://live.staticflickr.com/65535/52239546528_75e4e147bb_z.jpg" alt="Teste Lighthouse" />
</p>

- As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente
  - A cor de alguns textos `#A8A8B3` não tem o contraste suficiente de 4.5:1 do WCAG. Uma alternativa seria trocá-la para uma cor mais escura como `#6C6C80`.