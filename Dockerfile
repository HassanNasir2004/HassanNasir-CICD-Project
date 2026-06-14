FROm node:18-alpine
WORKDIR /app
COPY . .
EXpose 3000
CMP ["node", "app.js"]
