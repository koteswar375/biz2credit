const express = require('express')
const app = express();
const fs = require('fs');
const cors = require('cors')
const port = 3000;
const NodeCache = require( "node-cache" );
const Cache = new NodeCache();

let corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Welcome to ISP API Service'));

app.get('/api/ispdetails', (req, res) => {
    let cacheValue = Cache.get( "details");
    if(!cacheValue) {
        fs.readFile('./lists.json', (err, json) => {
            let obj = JSON.parse(json);
            Cache.set("details", obj);  //Cache the data
            res.json(obj);
        });
    } else {
        res.json(cacheValue);  //return te cached data
    }
});

app.get('/api/isplist', (req, res) => {

    let cacheValue = Cache.get( "names");
    if(!cacheValue) {
        fs.readFile('./lists.json', (err, json) => {
            let result = JSON.parse(json);
            let ISPNames = getISPNames(result);
            Cache.set("names", ISPNames);  //Cache the data
            res.json(ISPNames);
        });
    } else {
        res.json(cacheValue);  //return te cached data
    }

});



app.get('/api/ispproviderdetail/:name', (req, res) => {


    let cacheValue = Cache.get( "details");
    if(!cacheValue) {
        fs.readFile('./lists.json', (err, json) => {
            let obj = JSON.parse(json);
            let result = getISPDetailFromName(obj, req.params.name);
            Cache.set("details", obj);  //Cache the data
            res.json(result);
        });
    } else {
        let result = getISPDetailFromName(cacheValue, req.params.name);
        res.json(result);  //return te cached data
    }


});

const getISPNames = ( ispdetails ) => {
    let ISPs;
    if(ispdetails) {
         ISPs = ispdetails.map((val) => val.name);
    }
    return ISPs;
}


const getISPDetailFromName = ( ispdetails, name ) => {
    let result = ispdetails.filter((val) => val.name === name);
    return result[0];
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))