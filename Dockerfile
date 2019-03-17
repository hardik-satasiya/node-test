FROM node:11

# Install app dependencies
RUN yarn

EXPOSE  8080

CMD ["node", "index.js"]

