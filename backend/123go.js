const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('./db');

// Middle ware.
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start server.
function startServer(port) {
  app.listen(port, function() {
    console.log(`Express started in ${app.get('env')} mode on http://localhost:${port}; Press Ctrl + C to terminate.`);
  });
};

if (require.main === module) {
  startServer(process.env.PORT || 3000);
} else {
  module.exports = startServer;
}

// All routes access is controled by routes.js and handlers/ ...
// require('./routes')(app);
app.get('/main', (req, res) => res.json({ message: 'Backend connection success!' }));
app.get('/main/2', (req, res) => res.json({ message: 'Backend connection success!' }));