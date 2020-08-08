FROM node:12

ENV WEBROOT=/data/www/
ENV DOCROOT=/data/docs/

COPY docs/ ${DOCROOT}
COPY ./apidoc.json ${DOCROOT}/apidoc.json

RUN cd ${DOCROOT} \
    # install 
    && npm i install apidoc -g \
    && npm i install http-server -g \
    # generate
    && apidoc -i ${DOCROOT} -o ${WEBROOT} \
    # clean
    && rm -rf ${DOCROOT} \
    && echo "end"

WORKDIR ${WEBROOT}

CMD ["http-server", "./", "-p", "80"]
