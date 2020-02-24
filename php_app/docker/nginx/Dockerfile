FROM nginx:latest

RUN /bin/bash -c 'cp /etc/nginx/nginx.conf /etc/nginx/backup.old.conf'

ADD ./nginx.conf /etc/nginx/nginx.conf

RUN /bin/bash -c 'service nginx reload'

EXPOSE 80