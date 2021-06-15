var http = require("http");

const httpServer = http.createServer(handleServer);

const contactdetails = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
  }

function handleServer(req, res) {
  if(req.url=="/welcome"){
      res.writeHead(200,{
        "Content-Type":"text/plain"
      })
      res.write("Welcome to Dominos!");
      res.end();
  }
  else if(req.url=="/contact"){
    res.writeHead(200,{
        "Content-Type":"application/json"
      })
    res.write=(JSON.stringify(contactdetails));
    res.end();
  }
  else{
      res.writeHead(404);
      res.end();
  }
}

httpServer.listen(8083,_=>console.log("Running"))

module.exports = httpServer;