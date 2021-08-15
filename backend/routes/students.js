const express = require('express');
const studentsController = require('../controllers/students.controller');
const router = express.Router();

router.post("/", studentsController.save);
router.get("/", studentsController.index);
router.get("/:id", studentsController.show);
router.patch("/:id", studentsController.update);
router.delete("/:id", studentsController.destroy);


module.exports = router;