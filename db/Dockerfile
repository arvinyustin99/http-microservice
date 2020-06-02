FROM mariadb/server:10.4

COPY dblatihan.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
CMD ["mysqld"]

