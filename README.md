<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Onion Architecture Boilerplate

### DESCRIPTION

This repository is a real life example of Onion Architecture with use of `Node.js / Express` and `Typescript`

![Onion Diagram](onion.diagram.architecture.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1900T-IpU1bZR9VdoncC822qZCwcrgUOY)

> Diagrams have copyrights, if you want to use it on larger scale, feel free to contact me.

### BUSINESS CONTEXT

Project is a simple Nest API

#### Structure

1.  core ( `Application Core` )

        Contains application core related layers like application services, domain and domain services

2.  dependency ( `Dependency injection layer` )

        Contains definition for Container and whole project dependencies

3.  infrastructure

        Contains definition of data sources in case of this boilerplate - database

4.  ui

        Contains definition of presentation layer like controller, express setup etc

#### Data flow

It's important to keep data flow as simple as possible. Generally it's simple to follow - for entry data always specify request object,
for output translate data to specific layer. For easier understanding I've prepared a diagram.

![Onion Data Flow Diagram](onion.diagram.flow.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1cpdb56cnzkxT_LA_NSW9aRFDDcS_3GFl)

#### Architecture layers access restrictions

Every layer has its own rules when it comes to access to another layer.

- `Dependency injection` has access to every layer to provide proper implementations.
- `UI` have access only to `Core Layer`
  - `Domains` can be grouped into `Bounded Context`
  - Given `Domains` do not see each other, but defines `protocol` of communication like `CLI`, `REST` etc.
- `Infrastructure` have access only to `Core Layer`
  - `Functionalities` can be grouped into `Functionality Group` like `Messaging`, `Persistence` etc
  - Given `Functionalities` do not see each other, but have access to `Data Source`
- `Core Layer` don`t have access to any layer. It means that it's fully independent of implementations and can be
  extracted from project if needed
  - `Application Service` here have access to `Domain Services` and `Domain Models`
  - `Domain Serivce` have access only to domain models, and `Domain Services` don`t see one each other
  - `Domain Model` don`t have access to any upper layer

Visual representation of above restrictions can be seen in a diagram.

![Onion Data Layers Visibility](onion.diagram.layers.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1xonZCgIalsW1UCBqusK6Rqz5__I0-T8p)

#### Architecture layers in details

To understand in details how whole architecture works together with applied design patterns etc take a look
at detailed diagrams per layer.

![Onion UI Layer](onion.diagram.ui.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1e2hC_xUvdu9pPEKg1W1_4U2JLM-MtoP0)

![Onion Domain Layer](onion.diagram.domain.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1l4IkkixZhySl8gjp978M3dOWt3p_7Ihi)

![Onion Infrastructure Layer](onion.diagram.infrastructure.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=17ZEXrPhbfOAjautzJ2waOFTVvfSS0rzs)

#### Architecture Growth Lifecycle

It's natural that every project evolve with time. From my perspective process of growth can be divided into specific phases.

- Initial Phase
  - Introducing `Onion Architecture` to project by `layering` codebase - separating code into `UI`, `CORE`, `INFRASTRUCTURE` layers
- Bounded Context Phase
  - Grouping domains into `Bounded Contexts`
- Bounded Context Growth Phase
  - Separating whole project into `Multiple Bounded Contexts`
- Modularization Phase
  - Dividing Project into `Modules`. Usually you will notice that you can rollback your code to `Initial Phase` as modules are separation was
    based on `Bounded Contexts`
- Modularization Growth Phase
  - Every `Module` evolve in its own pace up to `Bounded Context Growth Phase`. You may have also `Common Module` which is shared across other modules.
- Microservices Phase
  - After some time you may notice that having multiple modules within one codebase is too much, or you may se that specific module is a potential candidate to `Microservice`.
    If you decide to detach `Module` into `Microservice` you may start application lifecycle from the beginning or from any phase you like up to `Modularization Growth Phase`.
    You may even start from initial phase and move through all the phases within specific `Microservice`. Every `Microservice Architecture lifecycle` is independent ( like in `Modularization Growth Phase`)

Visual representation of above process can be seen in a diagram.

![Onion Project Lifecycle](onion.diagram.lifecycle.svg)

Diagram available [here](https://drive.google.com/uc?export=view&id=1GkY_vOUCXxVce-6Ajz1Zlj1pVMwhJ9d1)

#### Database Structure

To have better context on general example of architecture, it's also good to understand database structure and how whole project structure
is aligned to it.

![Project database structure](onion.diagram.database.png)

#### Reference

Inspired by following articles and repos:

https://github.com/Melzar/onion-architecture-boilerplate/blob/master/README.md

https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad

https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together

https://www.slideshare.net/matthidinger/onion-architecture

### SWAGGER

`http://localhost:3000/api/`
