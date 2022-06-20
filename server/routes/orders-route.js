const express = require("express");
const router = express.Router();
const ordersRoutes = require("./../controllers/orders-controller");

router.get("/all", ordersRoutes.ordersAll);

router.get("/find", ordersRoutes.ordersFind);

router.post("/create", ordersRoutes.ordersCreate);

router.put("/update", ordersRoutes.ordersUpdate);

router.put("/delete", ordersRoutes.ordersDelete);

module.exports = router;
