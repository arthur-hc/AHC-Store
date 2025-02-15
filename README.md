Hi! This project aims develop a Store Rest API.

Tecnologies

- Typescript
- NestJS
- Docker
- Postgresql
- TypeOrm
- Redis

Architecture:

- MVC

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
   - IV_KEY (suggestion 00112233445566778899aabbccddeeff)
   - PASS_KEY (suggestion PasswordUsedToGenerateKey)
   - JWT_SECRET (suggestion jwt_secret123)
   - JWT_EXPIRES_IN (suggestion 60s)
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
  - [x] Entity
  - [x] Create
  - [x] Read
  - [x] Update
  - [x] Delete
  - [x] Connect with DB

- Products
  - [x] Entity
  - [x] Create
  - [x] Read
  - [x] Update
  - [x] Delete
  - [x] Connect with DB

- Orders
  - [x] Entity
  - [x] Create
  - [x] Read
  - [x] Update
  - [x] Delete
  - [x] Connect with DB
 
- Relationships
   - [x] User => Orders
   - [x] Orders => Products
 
- Exception Filter
   - [x] Filter to catch and personalize exceptions
 
- Cache manager
   - [x] Create cache Manager using Redis
   - [x] Apply cache manager to endpoint
 
- Create hasher
   - [x] Create hasher system
   - [x] Use system to hash senstive data
 
- Auth system
   - [x] Create authentication system
   - [x] Create token system generator using JWT
   - [x] Protect routes using Nest Guards
 
- Logs system
   - [x] Create logs global system
   - [x] Use system as interceptor
   - [x] Generate logs about request, response and operation time
 
