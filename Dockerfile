# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY public/ ./public
COPY src/ ./src
COPY package*.json ./

# Install app dependencies
RUN npm install

# Define the command to run your app
CMD ["npm", "start"]