FROM nginx:latest

RUN /bin/bash -c 'cp /etc/nginx/nginx.conf /etc/nginx/backup.old.conf'

ADD ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80