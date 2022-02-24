const db = require('../db');

exports.addUser = async (req, res) => {
  await db.addUser(req.body.name);
  res.json({ messasge: 'ADD SUCCESS:' + req.body.name });
}