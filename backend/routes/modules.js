const express = require('express');
const modulesController = require('../controllers/modules.controller');
const router = express.Router();

router.post("/", modulesController.save);
router.get("/", modulesController.index);
router.get("/:id", modulesController.show);
router.patch("/:id", modulesController.update);
router.delete("/:id", modulesController.destroy);


module.exports = router;