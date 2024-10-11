const express = require ("express");
const {statsController,deviationController} = require("../controllers/apiControllers");

const router = express.Router();

router.post("/stats",statsController);
router.post("/deviation",deviationController)

module.exports = router;