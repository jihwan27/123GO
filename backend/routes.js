const userApi = require('./handlers/user-api');

module.exports = function(app) {
    app.get('/', (req, res) => res.json({ message: 'Backend connection success!' }));
    app.get('/api/main', (req, res) => res.json({ message: 'Backend connection success!' }));
    app.get('/api/login', (req, res) => res.json({ message: 'login connection success!' }));
    
    app.post('/api/user', (req, res) => userApi.addUser(req, res));
}