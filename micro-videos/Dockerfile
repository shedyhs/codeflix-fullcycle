FROM node:lts

USER node

WORKDIR /home/node/app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

CMD ["sh", "-c", "yarn install && tail -f /dev/null"]