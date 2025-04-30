FROM balenalib/raspberrypi3-alpine-node

RUN npm i pm2 -g

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm i

COPY . .

CMD [ "pm2-runtime", "rpi-fan-ctrl.js" ]
