## Getting started with Graffiticode

### Steps include (Mac OSX)

* Setting up the global environment
  * `$ sudo npm install -g browserify`
* Clone and initialize the GC repo.
  * `$ git clone git@github.com:graffiticode/graffiticode.git`
  * `$ cd graffiticode`
  * `$ npm install`
* Setup environment variable to point to remote Postgres database.
  * ###
  * Make sure the following environment (export) variables are set:
    * `$ export DEBUG=true`
    * `$ export LOCAL_COMPILES=false`
    * `$ export LOCAL_DATABASE=false`
* [OPTIONAL] Create local Postgres database (Install Postgres if needed).
  * `$ psql -c "create database localgcdb"`
  * `$ psql -d localgcdb -f tools/initgcdb.sql`
  * `$ export LOCAL_DATABASE=true`
* Test the app.
  * `$ make test`
* Start the app.
  * `$ make`
* Get build and run the Graffiticode API gatway (see https://github.com/graffiticode/api)
* Make an artcompiler (see https://github.com/graffiticode/L0)

## Development

### Run `postgres` on docker
```bash
docker run \
  --name gcdb \
  --rm \
  --detach \
  -e POSTGRES_PASSWORD=notsecret \
  -v ${PWD}/util/initgcdb.sql:/docker-entrypoint-initdb.d/initgcdb.sql \
  -p 5432:5432 \
  postgres:12
export DEBUG=true
export LOCAL_DATABASE=true
export DATABASE_URL_LOCAL="postgres://postgres:notsecret@127.0.0.1:5432/postgres"
npm install
make

# Clean up
docker stop gcdb
```
