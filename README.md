# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Sample container running API end point /health
* Version
1.0
This was built using  VS Code editor
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
Already set, this is containerised, just require docker and a browser
npm and Makefile are used to streamline the pipeline.
* Dependencies
Standard nodejs packages and docker
* How to run tests
Can either run tests against local nodejs or running container
If running locally  - not inside container
    npm install
    npm start
    npm test

Otherwise run the container
    make dockerBuild  # if images needs to be rebuilt.
    make dockerRun  # to run the code inside container.
    npm test


* Deployment instructions

Make the changes as necessary and retest as outlined above.

Execute following to push image
    make dockerPush

To access the end point, use a browser of your choice with a GET request to:
    http://127.0.0.1:8000/health

### Contribution guidelines ###

Work in progress

### Who do I talk to? ###

* Richard Riccio