const jsonServer = require('json-server');
const pause = require('connect-pause');
const server = jsonServer.create();

server.use(jsonServer.bodyParser);
server.use(pause(500));

server.use((req, res) => {
  const {status, data} = require('./routes')(req);
  res.status(status).jsonp(data);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});
