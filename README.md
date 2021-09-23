# README #

# Docker container running a simple nodejs API, exposing an end point localhost:8000/health
* Version 1.0

## Summary of set up
Nodejs based API configured to execute inside docker container

Require nodejs, docker and a browser
npm and Makefile are used to streamline the pipeline.

## Dependencies
Standard nodejs packages and docker

## How to run tests
Can either run tests against local nodejs code or code running inside the docker container
If running locally  - not inside container
```
npm install     //install node packages
npm start       //start the nodejs app
npm test        //test the nodejs app
```
Otherwise run the container
```
make dockerClean    //optional to remove previous image.
make dockerBuild    //if images needs to be rebuilt.
make dockerRun      //to run the code inside container.
npm test            //to execute the test cases.
```


Manual testing can be performed via browser of your choice with a GET request to:
http://127.0.0.1:8000/health

Returns 200 Response with following sample details in json
{"Hash":"4bc0aeb2bad991ee5e0a97ba0f8d2dd6d3bd86a2","Name":"nodejsAPI","Version":"v14.17.6"}


## Deployment instructions

Make the changes as necessary and retest as outlined above.

Execute following to push image
```
make dockerPush
```
To access the end point, use a 
 http://127.0.0.1:8000/health   

### Contribution guidelines ###

* Work in progress

### Who do I talk to? ###

* Richard Riccio