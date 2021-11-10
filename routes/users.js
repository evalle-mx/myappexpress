const express = require('express'); 
const router = express.Router();

module.exports = router;

var users = [{name:'Dianita', email:'di@mail.com'}];

router.get('/', (_, resp) => {
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