const knex = require("./../db");

exports.ordersAll = async (req, res) => {
  knex
    .select("*")
    .from("orders")
    .then((orderData) => {
      res.json(orderData);
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.ordersFind = async (req, res) => {
  knex
    .select("*")
    .from("orders")
    .where("id", req.body.id)
    .then((orderData) => {
      res.json(orderData);
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.ordersCreate = async (req, res) => {
  knex("orders")
    .insert(req.body)
    .then(() => {
      res.json({ message: "Order wurde erfolgreich angelegt" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.ordersDelete = async (req, res) => {
  knex("orders")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: "Order wurde erfolgreich geloescht" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.ordersUpdate = async (req, res) => {
  knex("orders")
    .where("id", req.body.id)
    .update(req.body)
    .then(() => {
      res.json({ message: "Order wurde erfolgreich aktualisiert" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};
