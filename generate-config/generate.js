// include node fs module
var fs = require('fs');

const args = process.argv.slice(2)

// writeFile function with filename, content and callback function
fs.writeFile('service-config.yaml', `apiVersion: v1
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
`, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
