const express = require("express");
const router = express.Router();
const customersRoutes = require("./../controllers/customers-controller");

router.get("/all", customersRoutes.customersAll);

router.get("/find", customersRoutes.customersFind);

router.post("/create", customersRoutes.customersCreate);

router.put("/delete", customersRoutes.customersDelete);

router.put("/update", customersRoutes.customersUpdate);

module.exports = router;
