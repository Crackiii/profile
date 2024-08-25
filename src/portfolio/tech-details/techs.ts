import Angular from '../../images/techs/angular.png'
import AWS from '../../images/techs/aws.png'
import CDK from '../../images/techs/cdk.png'
import ClickHouse from '../../images/techs/clickhouse.png'
import Confluence from '../../images/techs/confluence.png'
import Cypress from '../../images/techs/cypress.png'
import DataDog from '../../images/techs/datadog.png'
import Django from '../../images/techs/django.png'
import Docker from '../../images/techs/docker.png'
import DynamoDB from '../../images/techs/dynamodb.png'
import ElasticSearch from '../../images/techs/elastic.png'
import EsBuild from '../../images/techs/esbuild.png'
import FaskApi from '../../images/techs/fastapi.png'
import FeatureFlag from '../../images/techs/featureflag.png'
import Firebase from '../../images/techs/firebase.png'
import Flask from '../../images/techs/flask.png'
import Git from '../../images/techs/git.png'
import GitlabCI from '../../images/techs/gitlab-ci.png'
import Go from '../../images/techs/go.png'
import GraphQL from '../../images/techs/graphql.png'
import Jest from '../../images/techs/jest.png'
import Jira from '../../images/techs/jira.png'
import Jotai from '../../images/techs/jotai.png'
import JavaScript from '../../images/techs/js.png'
import Jupyter from '../../images/techs/jupyter.png'
import Jwt from '../../images/techs/jwt.png'
import Kafka from '../../images/techs/kafka.png'
import LaunchDarkly from '../../images/techs/launchdarkly.png'
import Mocha from '../../images/techs/mocha.png'
import Mongo from '../../images/techs/mongo.png'
import MySQL from '../../images/techs/mysql.png'
import NextJS from '../../images/techs/nextjs.png'
import Node from '../../images/techs/node.png'
import OpenApi from '../../images/techs/openapi.png'
import PlayWright from '../../images/techs/playwright.png'
import Postgresql from '../../images/techs/postgresql.png'
import PostMan from '../../images/techs/postman.png'
import Python from '../../images/techs/python.png'
import RabbitMQ from '../../images/techs/rabbitmq.png'
import ReactNative from '../../images/techs/react-native.png'
import ReactQuery from '../../images/techs/react-query.png'
import React from '../../images/techs/react.png'
import Redis from '../../images/techs/redis.png'
import Rest from '../../images/techs/rest.png'
import Rust from '../../images/techs/rust.png'
import SAM from '../../images/techs/sam.png'
import Sass from '../../images/techs/sass.png'
import StoryBook from '../../images/techs/storybook.png'
import Svelete from '../../images/techs/svelte.png'
import Swagger from '../../images/techs/swagger.png'
import Tailwind from '../../images/techs/tailwind.png'
import Terraform from '../../images/techs/terraform.png'
import TypeScript from '../../images/techs/ts.png'
import Turborepo from '../../images/techs/turborepo.png'
import Vitest from '../../images/techs/vitest.png'
import Vue from '../../images/techs/vue.png'
import WebPack from '../../images/techs/webpack.png'
import Zustand from '../../images/techs/zustand.png'

/**
  Groupings:
  Frontend: JavaScript, TypeScript, React, React Native, Vue, Angular, Svelte, React Query, NextJS, Tailwind, Sass, StoryBook
  Backend: Node, Python, Flask, FastAPI, Django, Go
  Cloud: AWS, CDK, Terraform, Docker, DynamoDB
  APIs: JWT, REST, GraphQL, OpenAPI, Swagger, Postman
  Databases: PostgreSQL, MySQL, MongoDB, Firebase, Redis, ClickHouse, Kafka, RabbitMQ, Elastic Search
  Testing: Jest, Mocha, Cypress, PlayWright, Vitest
  Build Tools: EsBuild, Webpack, TurboRepo
  DevOps and Other Tools: Git, Gitlab CI, Jira, Confluence, Jupyter, DataDog, Feature Flag, LaunchDarkly
  Learning: Rust
 */

export const techs = [
  // Frontend
  {
    name: 'JavaScript',
    image: JavaScript
  },
  {
    name: 'TypeScript',
    image: TypeScript
  },
  {
    name: 'React',
    image: React
  },
  {
    name: 'React Native',
    image: ReactNative
  },
  {
    name: 'Vue',
    image: Vue
  },
  {
    name: 'Angular',
    image: Angular
  },
  {
    name: 'Svelte',
    image: Svelete
  },
  {
    name: 'React Query',
    image: ReactQuery
  },
  {
    name: 'Zustand',
    image: Zustand
  },
  {
    name: 'Jatoi',
    image: Jotai
  },
  {
    name: 'NextJS',
    image: NextJS
  },
  {
    name: 'Tailwind',
    image: Tailwind
  },
  {
    name: 'Sass',
    image: Sass
  },
  {
    name: 'StoryBook',
    image: StoryBook
  },

  // Backend
  {
    name: 'Node',
    image: Node
  },
  {
    name: 'Python',
    image: Python
  },
  {
    name: 'Flask',
    image: Flask
  },
  {
    name: 'FastAPI',
    image: FaskApi
  },
  {
    name: 'Django',
    image: Django
  },
  {
    name: 'Go',
    image: Go
  },

  // Cloud
  {
    name: 'AWS',
    image: AWS
  },
  {
    name: 'CDK',
    image: CDK
  },
  {
    name: 'SAM',
    image: SAM
  },
  {
    name: 'Terraform',
    image: Terraform
  },
  {
    name: 'Docker',
    image: Docker
  },
  {
    name: 'DynamoDB',
    image: DynamoDB
  },

  // APIs
  {
    name: 'JWT',
    image: Jwt
  },
  {
    name: 'REST',
    image: Rest
  },
  {
    name: 'GraphQL',
    image: GraphQL
  },
  {
    name: 'OpenAPI',
    image: OpenApi
  },
  {
    name: 'Swagger',
    image: Swagger
  },
  {
    name: 'Postman',
    image: PostMan
  },

  // Databases
  {
    name: 'PostgreSQL',
    image: Postgresql
  },
  {
    name: 'MySQL',
    image: MySQL
  },
  {
    name: 'MongoDB',
    image: Mongo
  },
  {
    name: 'Firebase',
    image: Firebase
  },
  {
    name: 'Redis',
    image: Redis
  },
  {
    name: 'ClickHouse',
    image: ClickHouse
  },
  {
    name: 'Kafka',
    image: Kafka
  },
  {
    name: 'RabbitMQ',
    image: RabbitMQ
  },
  {
    name: 'Elastic Search',
    image: ElasticSearch
  },

  // Testing
  {
    name: 'Jest',
    image: Jest
  },
  {
    name: 'Mocha',
    image: Mocha
  },
  {
    name: 'Cypress',
    image: Cypress
  },
  {
    name: 'PlayWright',
    image: PlayWright
  },
  {
    name: 'Vitest',
    image: Vitest
  },

  // Build Tools
  {
    name: 'EsBuild',
    image: EsBuild
  },
  {
    name: 'Webpack',
    image: WebPack
  },
  {
    name: 'TurboRepo',
    image: Turborepo
  },

  // DevOps and Other Tools
  {
    name: 'Git',
    image: Git
  },
  {
    name: 'Gitlab CI',
    image: GitlabCI
  },
  {
    name: 'Jira',
    image: Jira
  },
  {
    name: 'Confluence',
    image: Confluence
  },
  {
    name: 'Jupyter',
    image: Jupyter
  },
  {
    name: 'DataDog',
    image: DataDog
  },
  {
    name: 'Feature Flag',
    image: FeatureFlag
  },
  {
    name: 'LaunchDarkly',
    image: LaunchDarkly
  },

  // Learning
  {
    name: 'Rust (Learning)',
    image: Rust
  }
]
