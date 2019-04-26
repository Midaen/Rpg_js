var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log('Connexion...');
    if (page == '/save') {

      res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'<script src="stuff.js"></script>'+
'<script src="monster.js"></script>'+
'<script src="player.js"></script>'+
'    </head>'+
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
    }
    res.end();
});
server.listen(8888);
