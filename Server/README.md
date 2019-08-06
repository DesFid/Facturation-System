# TriHard-Reservations Server

Installation
```bash
npm install
```
or
```bash
yarn install
```
## To Run
```bash
npm run start
```
With Nodemon
```bash
npm run nodemon
```
### Create role
```bash
CREATE USER facturation_admin PASSWORD '123456';
ALTER ROLE facturation_admin WITH SUPERUSER;
ALTER ROLE facturation_admin WITH LOGIN;
```
### Create Database 
```bash
CREATE DATABASE "facturation_db"
    WITH 
    OWNER = facturation_admin
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

### Migrate the tables
```
 knex migrate:latest
```

### Add records in the tables #Dates testing
```bash
knex seed:run
```

### To do tests in postman
url = localhost:8000/get




