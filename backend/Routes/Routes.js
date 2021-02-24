const express = require('express');
const Controller = require('../Controllers/controller');
const router = express.Router();

router.get("/getState" , Controller.getState)
router.post("/postState" , Controller.postState)
router.get("/getDistrict" , Controller.getDistrict)
router.post("/postDistrict" , Controller.postDistrict)
router.get("/getChild" , Controller.getChild)
router.post("/postChild" , Controller.postChild)

module.exports = router;