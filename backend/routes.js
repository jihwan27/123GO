const userApi = require('./handlers/user-api');
console.log("ROUTING");

module.exports = function(app) {
    app.get('/', (req, res) => res.json({ message: 'Backend connection success!' }));
    app.get('/main', (req, res) => res.json({ message: 'Backend connection success!' }));
    app.get('/login', (req, res) => res.json({ message: 'login connection success!' }));
    
    app.post('/user', (req, res) => userApi.addUser(req, res));
}