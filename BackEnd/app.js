const express = require('express')
const app = express();
const fs = require('fs');
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/ispdetails', (req, res) => {

    fs.readFile('./lists.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});

app.get('/api/isplist', (req, res) => {

    fs.readFile('./lists.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});

app.get('/api/ispproviderdetail/:key', (req, res) => {

    fs.readFile('./lists.json', (err, json) => {
        let obj = JSON.parse(json);
        let result = obj.filter((val) => val.name === req.params.key);
        res.json(result);
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))