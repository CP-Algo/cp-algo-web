# cp-algo

## Setup the database

The app needs a PostgreSQL database to store and manage data. The easiest way to setup the database is to install [Docker](https://www.docker.com) and then run the following command:

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=postgrespw -p 5040:5432 -d postgres
```

Optionally, run the following command to setup pgAdmin using Docker:

```bash
$ docker run -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org' -e 'PGADMIN_DEFAULT_PASSWORD=pgadmin4pw' -d --name pgadmin4 dpage/pgadmin4
```

Then you can access pgAdmin by visiting `http://localhost:5050`. In order to connect pgAdmin to the database instance created earlier, use the following credentials:

```
Host Address: host.docker.internal
Port: 5040
Maintenance Database: postgres
User: postgres
Password: postgrespw
```

## Configure the .env file

Once the database is ready, create a `.env` file in the project root directory with the following contents:

```bash
NODE_ENV='development'
DOMAIN='http://localhost'
PORT=3000
DATABASE_URL='postgres://postgres:postgrespw@localhost:5040/postgres'
BASE_URL=http://localhost:3000/api
BROWSER_BASE_URL=http://localhost:3000/api
JUDGE0_BASE_URL=http://localhost:2358
```

If you're developing remotely, then change the `BROWSER_BASE_URL` variable to `https://your-remote-machine-address:3000/api`.

## Setup Judge0

The app uses Judge0 to run and test codes. Run the following commands to setup Judge0 using Docker:

```bash
$ cd judge0-v1.13.0
$ docker-compose up -d db redis
$ sleep 10s
$ docker-compose up -d
$ sleep 5s
```

Depending on your Docker version, the Judge0 server might show some permission errors on submission results. Try the fixes suggested [here](https://github.com/judge0/judge0/issues/325) if that is the case.

## Run the app

Finally, check out the commands below and run the appropriate ones:

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
