var http = require('http')

http.createServer(server).listen(1000)

function server(req,res){
    res.write("Namaskāram")
    res.end()
}