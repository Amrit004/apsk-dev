FROM node:18-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY package.json package-lock.json* ./
RUN npm ci --silent

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
