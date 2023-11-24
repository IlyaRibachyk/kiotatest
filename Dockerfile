# Use the official Microsoft Azure Functions Python image
FROM mcr.microsoft.com/azure-functions/node:3.0

# Set the working directory
WORKDIR /home/site/wwwroot

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Expose port
EXPOSE 7071

# Start the Azure Functions host
CMD func start