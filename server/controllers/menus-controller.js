const knex = require("./../db");

exports.menusAll = async (req, res) => {
  knex
    .select("*")
    .from("menus")
    .then((menuData) => {
      res.json(menuData);
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.menusFind = async (req, res) => {
  knex
    .select("*")
    .from("menus")
    .where("id", req.body.id)
    .then((menuData) => {
      res.json(menuData);
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.menusCreate = async (req, res) => {
  knex("menus")
    .insert(req.body)
    .then(() => {
      res.json({ message: "Menu wurde erfolgreich angelegt" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.menusDelete = async (req, res) => {
  knex("menus")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: "Menu wurde erfolgreich geloescht" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};

exports.menusUpdate = async (req, res) => {
  knex("menus")
    .where("id", req.body.id)
    .update(req.body)
    .then(() => {
      res.json({ message: "Menu wurde erfolgreich aktualisiert" });
    })
    .catch((err) => {
      res.json({ message: `Ein Fehler ist aufgetaucht: ${err}` });
    });
};
