const { Client } = require('pg');

const client = new Client({
  user: 'postgres',            // 👈 replace with your DB user
  host: 'localhost',           // 👈 change if remote
  database: 'postgres',        // 👈 replace with your DB name
  password: 'password123',   // 👈 your password here
  port: 5432,                  // 👈 PostgreSQL default port
});

client.connect()
  .then(() => console.log('✅ Connected to PostgreSQL!'))
  .catch(err => console.error('❌ Connection error:', err))
  .finally(() => client.end());
