## Movies
### Installation and Setup
From the command line:
1. git clone https://github.com/JellyBeans1312/byobackend <PROJECT_NAME>
1. Run npm install
1. Run nodemon server.js
In your browser:
Open localhost://3000/
### Overview
A movie database with directors.
### Technologies
- JavaScript / Node.js 
- Express.js 
- PostgreSQL 
- Knex.js
### Endpoints
| url | verb | options | expected response |
| ----|------|---------|---------------- |
| https://by-ob.herokuapp.com/api/v1/movies | GET | not needed | ARRAY of all movies currently in the database |
| https://by-ob.herokuapp.com/api/v1/directors | GET | not needed | ARRAY of all directors currently in the database |
| https://by-ob.herokuapp.com/api/v1/movies/:id | GET | not needed | OBJECT containing movie |
| https://by-ob.herokuapp.com/api/v1/directors/:id | GET | not needed | OBJECT of the specified director |
| https://by-ob.herokuapp.com/api/v1/movies/ | POST | | Add a new movie to the database, success response contains movie ID `` |
| https://by-ob.herokuapp.com/api/v1/directors | POST | {"firstName": <STRING>, "lastName": <STRING>} | Add new director; success response contains director ID |
| https://by-ob.herokuapp.com/api/v1/movies/:id | DELETE | not needed | Delete selected movie from the database |
Note: All of these endpoints will return semantic errors if something is wrong with the request.