const express = require("express");
const router = express.Router();
const personalRoutes = require("./../controllers/personal-controller");

router.get("/all", personalRoutes.personalAll);

router.get("/find", personalRoutes.personalFind);

router.post("/create", personalRoutes.personalCreate);

router.put("/delete", personalRoutes.personalDelete);

router.put("/update", personalRoutes.personalUpdate);

module.exports = router;
