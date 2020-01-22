var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.port || 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.post('/api/login', (req,res) => {
    if (req.body.username==='admin' && req.body.password==='12345') {
        res.send({email:'admin@admin.com', id:5, token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'})
    } else {
        res.status(401).send('Not Authorized');
    }

    res.status(500).send('Internal Error');
});

app.get('/api/fetchdata', (req,res) => {
    let data= []; 
    data.push({"dateFormatted":"12/3/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/3/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"1/3/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/3/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/5/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/5/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/7/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})
    data.push({"dateFormatted":"12/9/2018", "temperatureC":25, "temperatureF":42, "summary":"Lorem ipsum"})


    res.status(200).send(data);
});

app.listen(port);
console.log('Fake api started on '+ port);