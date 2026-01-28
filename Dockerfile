FROM node:22

WORKDIR /app

COPY . /app

RUN yarn install

ENV HOST 0.0.0.0
ENV NUXT_PORT 3000 

EXPOSE $NUXT_PORT

CMD ["yarn", "dev"]
