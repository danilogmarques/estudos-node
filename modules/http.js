const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to the Home Page</h1>");
    }

if (req.url === "/users") {
    const users = [
        {
            name: "Jhon Doe",
            email: "jhondoe@.com"
        },
        {
            name: "Jane Doe",
            email: "janedoe@.com"
        }
    ]

    res.writeHead(200, { "Content-Type": "aplication/json" });
    res.end(JSON.stringfy(users));
};
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
