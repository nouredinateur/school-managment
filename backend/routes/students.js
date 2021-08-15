const express = require('express');
const studentsController = require('../controllers/students.controller');
const router = express.Router();

router.post("/", studentsController.save);
router.get("/", studentsController.index);
router.get("/:id", studentsController.show);

module.exports = router;