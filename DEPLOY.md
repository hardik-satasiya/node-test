## Deploy a Containerized "Hello World" Application to Kubernetes Engine

### Setup
```
gcloud components install kubectl
```

### Create a cluster
```
gcloud container clusters create my-cluster \
    --scopes "cloud-platform" \
    --num-nodes 2 \
    --zone us-east1-b
```

### Push Docker Image to GCR
```
docker build -t gcr.io/gke-node-hello-world/image .
gcloud docker -- push gcr.io/gke-node-hello-world/image
```
(requires to do `gcloud auth configure-docker`)

### Create a deployment and service
```
kubectl create -f kubernetes-deployment.yaml
kubectl create -f kubernetes-service.yaml
```

### Get the deployed App IP
```
kubectl describe service my-service | grep Ingress
```

### References
- [Running the Node.js Bookshelf on Kubernetes Engine](https://cloud.google.com/nodejs/docs/tutorials/bookshelf-on-kubernetes-engine)
