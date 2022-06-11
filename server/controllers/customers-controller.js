const knex = require('./../db')

exports.customersAll = async (req, res) => {
    knex
        .select('*')
        .from('customers')
        .then(customerData => {
            res.json(customerData)
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.customersFind = async (req, res) => {
    knex
        .select('*')
        .from('customers')
        .where('id', req.body.id)
        .then(customerData => {
            res.json(customerData)
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.customersCreate = async (req, res) => {
    knex('customers')
        .insert({
            'name': req.body.name,
            'age': req.body.age,
            'address': req.body.address,
            'phone': req.body.phone,
            'dateOfSubscription': req.body.dateOfSubscription,
            'dateOfSubscriptionEnd': req.body.dateOfSubscriptionEnd,
            'paidAmount': req.body.paidAmount
        })
        .then(() => {
            res.json({ message: 'Kunde wurde erfolgreich angelegt' })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.customersDelete = async (req, res) => {
    knex('customers')
        .where('id', req.body.id)
        .del()
        .then(() => {
            res.json({ message: 'Kunde wurde erfolgreich geloescht' })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}

exports.customersUpdate = async (req, res) => {
    knex('customers')
        .where('id', req.body.id)
        .update(req.body)  
        .then(() => {
            res.json({ message: `${req.body.name} war erfolgreich aktualisiert.` })
        })
        .catch(err => {
            res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` })
        })
}
