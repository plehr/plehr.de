FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY site /usr/share/nginx/html

EXPOSE 80
