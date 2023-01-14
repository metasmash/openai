FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy dependencies files
COPY package*.json ./

# Copy tsconfig
COPY tsconfig.json ./

# Install dependencies
RUN npm install --omit=dev

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]