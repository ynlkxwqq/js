# Run project
npm install
node index.js
 
http://localhost:3000/users
 
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"Yenlik"}'
