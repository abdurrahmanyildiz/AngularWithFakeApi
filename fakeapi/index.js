var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.port || 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.post('/api/login', (req, res) => {
    if (req.body.username === 'admin' && req.body.password === '12345') {
        res.send({ email: 'admin@admin.com', id: 5, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' })
    } else {
        res.status(401).send('Not Authorized');
    }

    res.status(500).send('Internal Error');
});

app.get('/api/fetchdata', (req, res) => {
    let data = [];
    const pageSize = parseInt(req.query.pageSize);
    const pageNum = parseInt(req.query.pageNum);

    if (pageSize === 'NaN' || pageNum === 'NaN') {
        res.status(400).send('Bad Argumetns');
    }

    for (let i = 0; i < 50; i++) {
        data.push({ "dateFormatted": "12/3/2018", "temperatureC": i, "temperatureF": 42, "summary": "item " + (i + 1) });
    }

    const resData = data.slice(pageSize * pageNum, pageSize * pageNum + pageSize)
    return res.status(200).send(resData);
});

app.listen(port);
console.log('Fake api started on ' + port);