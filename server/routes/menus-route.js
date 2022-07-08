const express = require("express");
const router = express.Router();
const menusRoutes = require("./../controllers/menus-controller");

router.get("/all", menusRoutes.menusAll);

router.get("/find", menusRoutes.menusFind);

router.post("/create", menusRoutes.menusCreate);

router.put("/update", menusRoutes.menusUpdate);

router.put("/delete", menusRoutes.menusDelete);

module.exports = router;
