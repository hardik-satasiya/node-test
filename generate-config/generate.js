// include node fs module
// npm run generate-config $APP $GIT_COMMIT $GIT_BRANCH
var fs = require('fs');

const args = process.argv.slice(2)

const APP = args[0]
const GIT_COMMIT = args[1]
const GIT_BRANCH = args[2]

const K8S_CLUSTER_URL = APP + '-' + GIT_BRANCH + '.fashionfortret.com'
const DockerRegistryUrl = 'gcr.io/advance-verve-234809/github.com/hardik-satasiya/node-test'

/*
apiVersion: v1
kind: Service
metadata:
  labels:
    run: nginx
  name: nginx-${args[0]}
  namespace: default
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    run: nginx
  type: NodePort
*/

// writeFile function with filename, content and callback function
fs.writeFile('deployment-config.yaml', `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${APP}-deployment
  labels:
    app: ${APP}
    version: ${GIT_COMMIT}
    pull-request: ${GIT_BRANCH}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ${APP}
  template:
    metadata:
      labels:
        app: ${APP}
    spec:
      containers:
      - name: wegde-ibe
        image: ${DockerRegistryUrl}:${GIT_COMMIT}
        ports:
        - containerPort: 3000

---

apiVersion: v1
kind: Service
metadata:
  name: ${APP}-service
spec:
  selector:
    app: ${APP}
  ports:
  - protocol: TCP
    name: http
    port: 80
    targetPort: 3000
  - protocol: TCP
    name: https
    port: 443
    targetPort: 3000

---

apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ${APP}-ingress
spec:
  rules:
  - host: ${K8S_CLUSTER_URL}
    http:
      paths:
        - backend:
            serviceName: ${APP}-service
            servicePort: 80
`, function (err) {
  if (err) throw err;
  console.log('Deploy Config File is created successfully.');
});

