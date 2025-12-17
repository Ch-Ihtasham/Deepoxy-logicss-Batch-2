// server.mjs
// import { createServer } from 'node:http';
// import 'dotenv/config';

// import { env } from 'node:process';
// const port=process.env.PORT || 4000
// console.log(process.env.PORT)
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// starts a simple http server locally on port 3000
// server.listen(port, () => {
//   console.log('Listening on 127.0.0.1:4000');
// });
// console.log(process.cwd())
// run with `node server.mjs`


// const dir=process.argv[2]
// console.log(dir)

import fs, { mkdir } from 'fs'
// import fs from 'fs/promises' when you have to use the await
// console.log('file no one is creating')

// file creating concept

// fs.writeFileSync('c.txt', 'hello this is our backend class')
// console.log('file no 1 created')

// fs.writeFile('d.txt', 'this is our second file', (error) => {
//     if (error) {
//         console.log('Error Occour while creating file', error)
//     }
//     console.log('file created')
// })
// try {
//     await fs.writeFile('e.txt', 'this is our third file')
// }
// catch {
//     console.log('error ')
// }
// console.log('file no 2 created')

// to read file

// fs.readFile('a.txt', (e, d) => {
//     if (e) {
//         console.log('error')
//     }
//     console.log(d.toLocaleString())
// })

// const data = fs.readFileSync('a.txt', 'utf-8')
// console.log(data)


// to update a file 
// const data = fs.readFileSync('a.txt', 'utf-8')
// fs.appendFile('b.txt', data, () => {
//     console.log('file appended')
// })
// console.log(fs.existsSync('f.txt'))


// const filename = process.argv[2]
// if (!filename) {
//     console.log('file name not avaliable')
//     process.exit(1)
// }
// fs.mkdirSync(filename)



// import fs from 'node:fs';
// import path from 'node:path';

// const folderName = process.argv[2];

// if (!folderName) {
//   console.log('❌ Folder name not provided');
//   process.exit(1);
// }

// // Create folder
// fs.mkdirSync(folderName, { recursive: true });

// // Create file inside the folder
// const filePath = path.join(folderName, 'index.txt');

// fs.writeFileSync(filePath, 'Hello from Node.js 🚀');

// console.log(`✅ Folder "${folderName}" created`);
// console.log('✅ File "index.txt" created inside it');

// process.exit(0);
