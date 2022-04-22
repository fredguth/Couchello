# Couchello

A template project to demonstrate CouchDB best practices and potential.

# The Toy application

Couchello is a Trello clone. 

## Application Requirements

* As a user I want to keep track of cards (issues) in different boards (workflows)
* As a user I want to be able to work offline
* As a user I want to be able to invite team members to my workflows
* As a user I must not be able to see a worflow of which I am not a member
* As a user I want to be able to change the status (current state) of an issue. In other words, as a user I want to move issues from a state to another state
* A workflow has many states (board columns), each with many issues
* As a admin I want to be able to move the organization data to another database so that I am not locked in by the app developer (BYODB: Bring Your Own DB)

## Development Requirements
* offline first
* translucent database: all documents in the database must be encrypted/decrypted on the client side
* explicit schema definition with json-schema validation
* automated devops using couchdb bootstrap, pouchdb-migrate


## Current Status
* using prisma to generate a json-schema definition from a prisma schema file
* schema file in prisma/schema.prisma
* json-schema generated automatically in prisma/json-schema/json-schema.json


# Tooling
```
npm i -g https://github.com/jo/couchdb-bootstrap
npm i -g prisma
```

# Installing
```
mv .sample.env .env
npm i
prisma generate
 couchdb-bootstrap http://admin:{password}@localhost:5984 ./couchdb
```
