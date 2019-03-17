FROM alpine:3.1

# Update
RUN apk add --update nodejs

# Install app dependencies
RUN yarn install

EXPOSE  8080



