SHELL := /bin/bash
TAG?=14-alpine
# Custom with your application
VERSION_PREFIX ?= 1.0
APP_NAME = testapi
IMAGE_NAME ?= ricmusic/testapi

# Default setting
REGISTRY_V2 ?= https://hub.docker.com/repositories
REVISION_NUMBER = $(shell git log -1 --pretty=format:"%h")


# Applicaiton variables.
VERSION = $(VERSION_PREFIX)-$(REVISION_NUMBER)
GIT_URL = $(shell git config --get remote.origin.url)
GIT_HASH = $(shell git rev-parse HEAD )
DOCKER_URL = $(REGISTRY_V2)/$(IMAGE_NAME):$(TAG)

BRANCH = $(shell git rev-parse --abbrev-ref HEAD)

dockerBuild:
	docker build \
		--rm -f "Dockerfile" \
		--build-arg GIT_COMMIT=${GIT_HASH} \
		-t ${IMAGE_NAME}:${TAG} .


dockerRun:
	docker container run \
		--name  ${APP_NAME} \
		--rm \
		-d -p 8000:8000 \
		${IMAGE_NAME}:${TAG} \

dockerClean:
	docker rmi -f ${IMAGE_NAME}:${TAG}

dockerPush:
	docker image push ${IMAGE_NAME}:${TAG}