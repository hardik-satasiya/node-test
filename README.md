# Hello World Node App using Docker for Kubernetes Engine

This is a sample "Hello World" application for the "Continuous Deployment for Node Apps on GCP" tutorial that works with Docker on Kubernetes Engine.

## Prerequisites

Docker is installed

## Running Locally

```
PROJECT_ID=my-app REVISION_ID=1 npm run docker:start
PROJECT_ID=my-app REVISION_ID=1 npm run docker:stop
```

## Testing

```
PROJECT_ID=my-app REVISION_ID=1 npm run docker:test
```

## Deploying to Kubernetes Engine

Follow instructions [here](./DEPLOY.md)

## Deploying to Kubernetes Engine on Github push

Check out to the tutorial (link tbd)
