// var: function scope, tồn tại trong phạm vi của function được khai báo
// let: block scope, tồn tại trong phạm vi block bao quanh nó, let ko thể khai báo lại mà chỉ có thể gán giá trị

// if (true) {
//     var name = 'Thai';
// }
//
// console.log(name); // Thai
//
// if (true) {
//     let age = 28;
// }

// console.log(age); // age is not defined

let http = require('http');
let url = require('url');
const port = 3001;
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('This is a response for a request!\r\n');
    // get ip address of request
    const ipAddress = request.socket.remoteAddress;
    response.write(`The IP address is: ${ipAddress}\r\n`);
    // get url of request
    response.write(`Request url is: ${request.url}\r\n`);
    // get detail url of request
    response.write(`Detail url is: ${url.parse(request.url, true)}`);
    debugger;
    response.end();
}).listen(port);
console.log(`Server is running on port ${port}`);