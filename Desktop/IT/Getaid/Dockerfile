FROM node:alpine

RUN apk add --no-cache nodejs npm

RUN npm install -g tailwindcss postcss autoprefixer

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Set environment variables (if needed)
ENV FIREBASE_API_KEY="your_api_key"
ENV FIREBASE_AUTH_DOMAIN="your_auth_domain"
EXPOSE 3000

CMD ["npm", "run", "dev"]