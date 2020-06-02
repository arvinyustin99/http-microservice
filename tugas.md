# Deskripsi
Membuat microservice yang akan dengan menggunakan 2 metode: HTTP dan AMQP.

# Goal
1. Memahami prinsip docker.
2. Memahami cara microservice bekerja dan berinteraksi dengan api gateway.
3. Memahami perbedaan 2 metode microservice, http dan amqp.
4. Memahami cara unit testing bekerja.

# Todo
Intern akan membuat 1 gateway yang akan menembak 2 microservice yang memiliki metode yang berbeda. Intern akan melihat perbedaan dari performa kedua pendekatan microservice tersebut, AMQP dan HTTP.

Pekerjaan akan terdiri dari 3 project:

1. http-microservice
2. amqp-microservice
3. api-gateway

Database yang digunakan adalah mariadb, dan table yang akan dipakai memiliki kriteria sebagai berikut:
  1. Table name: **student**
  2. Table column: **name** (varchar), **registration_number** (integer)

## http-microservice
* Buatlah sebuah project **nodejs + mariadb** yang berjalan di dalam docker instance (gunakan docker-compose untuk mempermudah)
* Buatlah http server yang memiliki 2 endpoint:
  1. **POST /api/v1/students** -> akan menambahkan instance baru pada table student
  2. **GET /api/v1/students/:studentId** -> akan mengambil data berdasarkan studentId. Contoh request: **/api/v1/students/2**
## amqp-microservice
* Buatlah sebuah project **nodejs + mariadb + rabbitmq** yang berjalan di dalam docker instance
* Buatlah receiver yang akan menangani 2 jenis queue:
  1. **create-student** -> parse message buffer menjadi JSON lalu menambahkan instance baru pada table student
  2. **find-by-id-student** -> parse id dari message buffer, mengambil row di database dan mengirimkan kembali kepada sender data dari student

## api-gateway
* Buatlah sebuah project **nodejs** yang akan berjalan di dalam docker instance
* Buatlah http server yang memiliki 4 endpoint:
  1. **POST /api/v1/students/byhttp** -> melakukan http request kepada **POST http-microserver/api/v1/users** dan memberikan result json yang didapat
  2. **POST /api/v1/students/:studentId/byhttp** -> melakukan http request kepada **GET http-microservice/api/v1/users/:studentId** dan memberikan result json yang didapat
  3. **POST /api/v1/students/byamqp** -> mengirimkan message kepada channel consume dan memberikan result json yang didapat
  4. **POST /api/v1/students/:studentsId/byamqp** -> mengirimkan message kepada channel consume dan memberikan result json yang didapat
* Melakukan ujicoba masing masing 100 request dan melihat kecepatan dari 4 endpoint (benchmarking)