FROM node:24-alpine

WORKDIR /app

# Optimize layer caching by copying dependency manifests first
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application assets
COPY src ./src
COPY build.js ./

# Run build step if your app requires packaging (e.g. creating dist/)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]