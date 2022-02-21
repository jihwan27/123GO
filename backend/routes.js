module.exports = function(app) {
    app.get('/main', (req, res) => res.json({ message: 'Backend connection success!' }));
    app.get('/login', (req, res) => res.json({ message: 'login connection success!' }));
}