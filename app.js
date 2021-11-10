/*  
####################################################################
#			Building a simple REST API with NodeJS and Express.
#			Onejohi Jun 28, 2018 [NodeJS, HTTP REST, express, route, nodemon ]
#   https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
####################################################################
*/

/* //Default HTTP configuration
 const http = require('http');

http.createServer( (_, resp)=>{
    resp.write('This NodeJS is alive!');
    resp.end();
}).listen(4040); */

/* Default Express */
const express = require('express');
const app = express();
const port = process.env.PORT || 4041;

// Express v4.16.0 and higher
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For Express version less than 4.16.0
// const bodyParser = require('body-parser');
// app.use( bodyParser.urlencoded ({extended : false}));
// app.use(bodyParser.json());
// By checking the version: $ npm view express version

app.use('/', require('./routes/users'));

app.listen(port, () => {
    console.log(`Express Server Running on port ${port}`);
})

