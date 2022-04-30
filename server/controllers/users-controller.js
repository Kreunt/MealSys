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
    .where('username', req.body.username)
    .andWhere('password', req.body.password)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}

exports.usersReturnToken = async (req, res) => {
  knex
    .select('id')
    .from('users')
    .where('username', req.body['username'])
    .andWhere('password', req.body['password'])
    .then(userData => {
      res.json(userData[0])
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}

exports.usersReturnArea = async (req, res) => {
  knex
    .select('area')
    .from('users')
    .where('username', req.body.username)
    .andWhere('password', req.body.password)
    .then(userData => {
      res.json(userData[0])
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}