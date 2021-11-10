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

var users = [{name:'Dianita', email:'di@mail.com'}]


app.listen(port, () => {
    console.log(`Express Server Running on port ${port}`);
})

app
.get('/', (_, resp) => {
    resp.send('App Express online');
})
// .get("/url", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
// })
.get('/users', (_, resp) => {
    resp.json({ok:true, users });
})
.get('/user/:name', (req, resp) => {
    const {name}= req.params;
    const user = users.filter( (user) => user.name === name )[0]; //First user with that name
    resp.json( {ok:true, user });
})
.post('/adduser', (req, resp) => {
    const {name, email } = req.body;
    if(name && email ){
        users.push({name, email} );
        resp.json({ok:true, users}); 
    }
})
;