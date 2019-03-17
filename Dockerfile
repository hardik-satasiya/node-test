FROM alpine:3.1

# install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Update
RUN apk add --update nodejs

# Install app dependencies
RUN yarn install

EXPOSE  8080

CMD ["node", "index.js"]

