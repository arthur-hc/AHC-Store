Hi! This project aims develop a Store Rest API.

Tecnologies

- Typescript
- NestJS
- Docker
- Postgresql
- TypeOrm
- Redis

Dependences to run:

- Docker
- Typeorm

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
5. ➡️ docker-compose up -d
6. open in browser http://localhost:8081/
7. use credentials defined in env to access
8. create db with the same DB_NAME defined in env
9. ➡️ yarn start:dev

How run Typeorm CLI features:

1. ➡️ search typeorm command in package.json.
2. ➡️ use directly or yarn (or npm run) + typeorm + command
3. ➡️ example: yarn typeorm migration:show

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
