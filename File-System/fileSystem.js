const http = require('http');
const fs = require('fs');

const http_server = http.createServer(
    function(req, res){
        fs.readFile('fileSystem.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
);

http_server.listen(8080);