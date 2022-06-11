const knex = require('./../db')

exports.personalAll = async (req, res) => {
    knex
        .select('*')
        .from('personal')
        .then(personalData => {
            res.json(personalData)
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.personalFind = async (req, res) => {
    knex
        .select('*')
        .from('personal')
        .where('id', req.body.id)
        .then(personalData => {
            res.json(personalData)
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.personalCreate = async (req, res) => {
    knex('personal')
        .insert(req.body)
        .then(() => {
            res.json({ message: 'Personal wurde erfolgreich angelegt' })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.personalDelete = async (req, res) => {
    knex('personal')
        .where('id', req.body.id)
        .del()
        .then(() => {
            res.json({ message: 'Personal wurde erfolgreich geloescht' })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.personalUpdate = async (req, res) => {
    knex('personal')
        .where('id', req.body.id)
        .update(req.body)
        .then(() => {
            res.json({ message: 'Personal wurde erfolgreich aktualisiert' })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}