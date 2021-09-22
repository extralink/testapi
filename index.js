const config = require('config');
const express = require('express');
const app = express(); 
const package_json = require('./package.json');

const mocks = require('ronin-mocks')

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Configuration 

console.log('Application Name: ' + config.get('name'));

//AppName = config.get('name');
//AppVersion = 'My Version'; //config.get(version());
//GitHash = git.long()


const courses  = [
{Item: 1 , Hash: process.env.GITHASH},
{Item: 2 , Name: package_json.name},
{Item: 3 , Version: process.env.NODE_VERSION}
];


app.get('/',(req, res) => {
  res.send('Top Level, goto  http://localhost:8000/health ');
});

app.get('/health',function(req, res){
    res.send(courses);
});


//const port  = process.env.PORT || 3000;
const port = 8000;
app.listen(port, function(){
    console.log(`Listening on  dyn port  ${port}..`);
});