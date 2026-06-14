FROM node:18-alpine
WORKDIR /app
COPY . .
EXpose 3000
CMD ["node", "app.js"]
