// routes can be tested using Postman, Insoma, or Curl:
curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-H "x-api-key: my-secret-key" \
-d '{"name":"Laptop","description":"Dell","price":899.99,"category":"Electronics","inStock":true}'
