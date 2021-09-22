const config = require('config');
const express = require('express');
const app = express(); 
const package_json = require('./package.json');
GitHash = process.env.GITHASH || "GitHashNotDefined";

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Configuration 

console.log('Application Name: ' + config.get('name'));


if (GitHash === "GitHashNotDefined")
// env variable has not been passed
{
  GitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim()
}



const Payload  = {
 Hash: GitHash, 
 Name: config.get('name'),
 Version: process.version 
};

app.get('/',(req, res) => {
  res.send('Top Level, goto  http://localhost:8000/health ');
});

app.get('/health',function(req, res){
    res.send(Payload);
});


const port = 8000;
app.listen(port, function(){
    console.log(`Listening on  dyn port  ${port}..`);
});