# Use an official Node.js runtime as a parent image
FROM node:22.14.0

# Set the working directory in the container
WORKDIR /pages

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD [ "npm", "start" ]
