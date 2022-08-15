const userApi = require('./handlers/user-api');

module.exports = function(app) {
    app.get('/', (req, res) => res.json({ message: 'Backend connection success! 1111111' }));
    app.get('/main', (req, res) => res.json({ message: 'Backend connection success! 2222222' }));
    app.get('/login', (req, res) => res.json({ message: 'login connection success!' }));
    
    app.post('/user', (req, res) => userApi.addUser(req, res));
}