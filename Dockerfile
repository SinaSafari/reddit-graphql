FROM node:14-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Copy the project code
COPY . .

# Copy the environment variables
COPY .env.production .env

# compile typescript code to javascript
RUN yarn build

# change the node environment from 
# development to production
ENV NODE_ENV production

# port of app
EXPOSE 8080

# running the app
CMD [ "node", "dist/index.js" ]

# changing the user to node which is less privileged
USER node