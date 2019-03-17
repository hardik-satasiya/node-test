FROM alpine:3.1

# update node
RUN apk add --update nodejs

# install yarn
RUN apk add yarn

# Install app dependencies
RUN yarn install

EXPOSE  8080

CMD ["node", "index.js"]

