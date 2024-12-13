FROM node:22
WORKDIR /app
ENV DOCKERIZE_VERSION v0.8.0
RUN apt-get update \
&& apt-get install -y wget \
&& wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
&& apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g db-migrate
RUN npm install -g db-migrate-mysql
EXPOSE 3000
COPY entrypoint.sh /usr/local/bin/entrypoint.sh