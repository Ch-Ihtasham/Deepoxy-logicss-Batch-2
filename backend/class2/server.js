// server.mjs
import { createServer } from 'node:http';
import fs from 'fs'
// import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
const __dirname = dirname(__filename)
console.log(__filename)
console.log(__dirname)
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
