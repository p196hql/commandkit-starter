
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --engine-strict=false

COPY . .
RUN npm run build

FROM node:24-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev --engine-strict=false

COPY --from=builder /app/dist ./dist

CMD ["npm", "start"]
