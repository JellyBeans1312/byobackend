const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();


const csv = require('csv-parser');
const fs = require('fs')
const results = [];

app.set('port', process.env.PORT || 3000);
app.use(express.json(), router);
app.locals.title = 'Build Your Own Backend';


fs.createReadStream('film.csv') 
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', () => {
  console.log(results); 
})


router.get('/', (request, response) => { 
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/v1/movies', (request, response) => {

});

app.get('/api/v1/movies/:id', (request, response) => {

});

app.get('/api/v1/directors', (request, response) => {

});

app.get('/api/v1/directors/:id', (request, response) => {

});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});