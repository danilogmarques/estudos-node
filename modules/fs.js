 const fs = require('fs'); 

 // Create a new directory
 fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
     if (err) throw err;
     console.log('Directory created...');
 });

 // Create and write to a new file
 fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
     if (err) throw err;
     console.log('File written to...');

     // Append to the file
     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\n\nI love Node.js', (err) => {
         if (err) throw err;
         console.log('File appended to...');
     });
 });

 // Read the file
 fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
     if (err) throw err;
     console.log(data);
 });

 // Rename the file
 fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err) => {
     if (err) throw err;
     console.log('File renamed...');
 });        