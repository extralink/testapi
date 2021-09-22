FROM node:14-alpine
ENV NODE_ENV=test

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

ARG GIT_COMMIT=unspecified
# Set variable  as an env var
ENV COMMIT_SHA=${COMMIT}
ENV COMMIT_BRANCH=${BRANCH}
ENV GITHASH=$GIT_COMMIT

COPY . .
EXPOSE 8000

RUN chown -R node /usr/src/app
USER node

CMD ["node", "index.js"]
