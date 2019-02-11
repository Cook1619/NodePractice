const fs = require('fs');

requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message/</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        //res.end, you can send anything else back in the reponse after this method call
        return res.end();
    }
    if (url === "/message" && method === 'POST') {
        //on() allows you to listen to certain events
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            //BUffer object is a global object, then concat the body, will creat a new buffer and add all the chunks together, toString, because we know its a string this will work
            const parsedBody = Buffer.concat(body).toString();
            //your data coming back we look like message="text typed in" because of your name attribute in your input element
            //split will take everything to the the right of the = sign and take your input
            const message = parsedBody.split('=')[1];
            //This fs.writeFuleSYnc is now brought into this function because its dependant on that data were getting from the input, if we ran this outside the function it wouldn't work
            //the first argument is where you want the data to go,I'm creating a file called message.txt in this example
            //The second argument is what you want to put in the destination of where the data in going
            //The third arguement is a callback to make it non-blocking, when you use writeFileSync your waiting o
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    // nodejs gives us the request and response object back because we created the server and had it listen to on port 3000
    // console.log(req.url,req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page/</title></head>');
    res.write("<body><h1>Hello from NodejS</h1></body>")
    res.write('</html>');
    //res.end, you can send anything else back in the reponse after this method call
    res.end();
}

module.exports = requestHandler;