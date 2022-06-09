const knex = require('./../db')

exports.usersAll = async (req, res) => {
  knex
    .select('*')
    .from('users')
    .then(userData => {
      res.json(userData[0])
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
      res.json(userData[0])
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

exports.usersCreate = async (req, res) => {
  knex
    .insert(req.body)
    .into('users')
    .then(userData => {
      res.json(userData[0])
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}

exports.usersUpdate = async (req, res) => {
  knex
    .update(req.body)
    .from('users')
    .where('id', req.body.id)
    .then(userData => {
      res.json(userData[0])
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}

exports.usersDelete = async (req, res) => {
  knex
    .where('id', req.body.id)
    .del()
    .from('users')
    .then(userData => {
      res.json(userData[0])
    })
    .catch(err => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
    })
}