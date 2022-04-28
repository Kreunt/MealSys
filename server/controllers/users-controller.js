const knex = require('./../db')

exports.usersAll = async (req, res) => {
    knex
      .select('*')
      .from('users')
      .then(userData => {
        res.json(userData)
      })
      .catch(err => {
        res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
      })
}

exports.usersFind = async (req, res) => {
    knex
      .select('*')
      .from('users')
      .where('username', req.params.username)
      .andWhere('password', req.params.password)
      .then(userData => {
        res.json(userData)
      })
      .catch(err => {
        res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
      })
}