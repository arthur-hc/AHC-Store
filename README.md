Hi! This project is based on Alura Course. It aims develop a Rest API.

Tecnologies
- Typescript
- NestJS
- Docker
- Postgresql
- TypeOrm

Dependences to run:
- Docker

How run this project:
1. ➡️ git clone https://github.com/arthur-hc/AHC-Store.git
2. ➡️ cd AHC-Store/store
3. ➡️ yarn
4. create .env with this values
   - DB_HOST (suggestion 127.0.0.1)
   - DB_PORT (suggestion 5432)
   - DB_USERNAME (suggestion root)
   - DB_PASSWORD (suggestion root)
   - DB_NAME (suggestion db_store)
   - DB_ADMIN_EMAIL (suggestion admin@root.com)
6. ➡️ docker-compose up -d
7. open in browser http://localhost:8081/
8. use credentials defined in env to access
9. create db with the same DB_NAME defined in env
10. ➡️ yarn start:dev

To Do Features:
  - Users
     - [ ] Tests
     - [x] Entity
     - [x] Create
     - [x] Read
     - [x] Update
     - [x] Delete
     - [x] Connect with DB
  - Products
     - [ ] Tests
     - [x] Entity
     - [x] Create
     - [x] Read
     - [x] Update
     - [x] Delete
     - [x] Connect with DB
   
