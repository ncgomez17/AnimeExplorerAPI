# AnimeExplorer REST API

## Endpoints
* `GET /animeExplorer/getAnimeList`: Returns in a paginated way animes ordered by ID with info (name, synopsis, start date, end date, chapters, average_rating, genres)
* `GET /animeExplorer/getAnime`: with the id brings the info of the anime (where there are as chapters their ids) ById, ByName, ByGenre
* `GET /animeExplorer/getAnimeTrendings`: Get ranking by Popularity (name, rating and id) sorted
* `GET /animeExplorer/getAnimeTopDuration`: Ranking Duration (either by multiplying the average duration with the number of caps, or if there is a query that returns the time in total minutes) INFO: (name, rating and id) sorted.
* `GET /animeExplorer/getAnimeRanking `: Obtiene un ranking del top de animes por average rating ordenado

## Usage
```
npm install
npm test
npm start-nodemon
npm start
```