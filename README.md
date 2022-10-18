# AnimeExplorer REST API

## Endpoints
* `GET /health`: Gets API health status
* `GET /tasks`: Lists all tasks
* `POST /tasks`: Intentionally buggy route, returns an error
* `null`: Default route, returns 404 as the endpoint requested does not exist

## Usage
```
npm install
#npm test
node server.js
```

nodemon start