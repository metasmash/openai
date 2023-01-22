# Basic API boilerplate
___

### If you want to build your api with docker

``docker build --no-cache -t example-api .``

### For development purpose:

Start all your containers:

``docker-compose --env-file ./configs/example.env up -d``

Install dependencies:

``npm install``

Start your api:

``npm run dev``
___
### Running apps and ports:


| Service                  | URL                                                      | USAGE                                                           |
|--------------------------|----------------------------------------------------------|-----------------------------------------------------------------|
| __API__                  | [http://localhost:8080](http://localhost:8080)           | Express server to manage assignments                            |
| __API documentation__    | [http://localhost:8080/docs](http://localhost:8080/docs) | Swagger documentation to directly use API call                  |
| __Mongo express client__ | [http://localhost:8081](http://localhost:8081)           | Mongo express client                                            |
___
### Credentials:

If you want to know __username/password__ for __Mongo client__, check ``configs/example.env`` file.

___
