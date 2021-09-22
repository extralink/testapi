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
* Dependencies
Standard nodejs packages
* How to run tests
Work in Progress
* Deployment instructions

Pull down the latest version. 
If required, to build the image execute the following docker command from the root directory of this project:
    docker build   --pull --rm -f "Dockerfile"  --build-arg GIT_COMMIT=$(git rev-parse HEAD) -t testapi:$(git rev-parse HEAD) .

To run the docker image execute the following docker commands, first command to grab the [IMAGE ID] for the second command:
    docker images
    docker run --name testapi -d -p 8000:8000 [IMAGE ID]

To access the end point, use a browser of your choice with a GET request to:
    http://127.0.0.1:8000/health

### Contribution guidelines ###

* Limited time, no test cases
* TBC
* TBC

### Who do I talk to? ###

* Richard Riccio