FROM node:26

WORKDIR /app

RUN npm install -g corepack && corepack enable

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV HOST 0.0.0.0
ENV NUXT_PORT 3000 

EXPOSE $NUXT_PORT

CMD ["yarn", "dev"]
