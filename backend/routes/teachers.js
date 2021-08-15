const express = require('express');
const teachersController = require('../controllers/teachers.controller');
const router = express.Router();

router.post("/", teachersController.save);
router.get("/", teachersController.index);
router.get("/:id", teachersController.show);
router.patch("/:id", teachersController.update);
router.delete("/:id", teachersController.destroy);


module.exports = router;