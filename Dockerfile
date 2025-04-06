# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file into the container

# Expose the port your app runs on
EXPOSE 8000

# Start the application
# CMD ["node", "src/index.js"]


# Copy the load_secrets.sh script and make it executable
COPY script.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/script.sh

ENTRYPOINT ["/usr/local/bin/script.sh"]