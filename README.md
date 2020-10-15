<p align="center">
   <img src="./.github/logo.svg" alt="Happy" width="280"/>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/felipemjesus/">
      <img alt="Felipe Martins" src="https://img.shields.io/badge/-FelipeMartins-29B6D1?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felipemjesus/happy-api?color=29B6D1">

  <a aria-label="Completed" href="https://nextlevelweek.com" target="_blank">
    <img src="https://img.shields.io/badge/happy-NLW 3.0-29B6D1?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  
  <a href="https://github.com/felipemjesus/happy-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felipemjesus/happy-api?color=29B6D1">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-29B6D1">

  <a href="https://github.com/felipemjesus/happy-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/felipemjesus/happy-api?color=29B6D1&logo=github">
  </a>
</p>

> :rocket: Projeto feito para possibilitar visitas aos orfanatos, feito na Next Level Week #3 @Rocketseat

<div align="center">
  <p>
    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dd625bf9-cb75-466d-bef6-598ade8330ff/nlw.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201013%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201013T110138Z&X-Amz-Expires=86400&X-Amz-Signature=77171c08601205c9c517b80c64196518110bf1964678bc74e20cba79e2db173e&X-Amz-SignedHeaders=host" alt="Next Level Week #3" width="100"/>
  </p>
  <sub>The NLW #3 project. Built with ❤︎ by
    <a href="https://github.com/felipemjesus">Felipe Martins</a> and
    <a href="https://github.com/felipemjesus/happy-api/graphs/contributors">
      contributors
    </a>
  </sub>
</div>

# :pushpin: Tabela de Conteúdo

* [Tecnologias](#computer-tecnologias)
* [Funcionalidades](#rocket-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)
* [Encontrou um bug? Ou está faltando uma feature?](#bug-problemas)
* [Contribuindo](#tada-contribuindo)
* [Licencia](#closed_book-licencia)

# 📥 Versões disponiveis do projeto:

- Happy Web - [https://github.com/felipemjesus/happy-api](https://github.com/felipemjesus/happy-api)
- Happy Mobile - [https://github.com/felipemjesus/happy-mobile](https://github.com/felipemjesus/happy-mobile)
- Happy Api - [https://github.com/felipemjesus/happy-api](https://github.com/felipemjesus/happy-api)

# :computer: Tecnologias
Esse projeto foi feito utilizando as seguintes tecnologias:
<ul>
  <li><a href="https://reactjs.org/" target="_blank">Express</a></li>
  <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
  <li><a href="https://typeorm.io/#/" target="_blank">TypeORM</a></li>
  <li><a href="https://github.com/expressjs/multer" target="_blank">Express Multer</a></li>
  <li><a href="https://github.com/jquense/yup" target="_blank">Yup Validation</a></li>
  <li><a href="https://sqlite.org" target="_blank">Sqlite</a></li>
</ul>

# :rocket: Funcionalidades

* ```GET /orphanages``` Retorna lista de orfanatos disponíveis
* ```GET /orphanages/:id``` Retorna informações de um orfanato
* ```POST /orphanages``` Cadastro de novos orfanatos
```
Header: Content-Type: multipart/form-data
=========================================
name: Nome
latitude: -15.555
longitude: -47.555
about: Sobre
instructions: Informações
opening_hours: Horário de funcionamento
open_on_weekends: Aberto no fim de semana
images: Várias imagens do orfanato
```

# :construction_worker: Como rodar
```bash
# Clone o repositorio
$ git clone https://github.com/felipemjesus/happy-api.git

# Instale as depedencias
$ yarn

# Rode a aplicação
$ yarn start
```
Acesse o site: http://localhost:3333/

# :bug: Problemas

Fique a vontade **para criar uma nova issue** com o respectivo titulo e descrição na página de issues do [Happy WEB](https://github.com/felipemjesus/happy-api/issues) Repositorio. Se você já encontrou a solução para o problema, **Eu amaria fazer o review do seu pull request**!

# :tada: Contribuindo

Confira a página de [contribuição](https://github.com/felipemjesus/happy-api/blob/master/CONTRIBUTING.md) para ver como começar uma discução e começar a contribuir.

# :closed_book: Licencia

Lançado em 2020 :closed_book: Licencia

Feito por [Felipe Martins](https://github.com/felipemjesus) 🚀.
Esse projeto esta sobre [MIT license](https://github.com/felipemjesus/happy-api/master/LICENSE).


Dê uma ⭐️ se esse projeto te ajudou!
