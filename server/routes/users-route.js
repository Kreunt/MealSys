const express = require("express");
const router = express.Router();
const usersRoutes = require("./../controllers/users-controller");

router.get("/all", usersRoutes.usersAll);

router.get("/find", usersRoutes.usersFind);

router.post("/create", usersRoutes.usersCreate);

router.put("/update", usersRoutes.usersUpdate);

router.put("/delete", usersRoutes.usersDelete);

module.exports = router;
