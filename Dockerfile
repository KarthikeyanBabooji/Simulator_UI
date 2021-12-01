
FROM node:10.16.3-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN npm run build
# start app
EXPOSE 4200
CMD ng serve --host 0.0.0.0 --disable-host-check
