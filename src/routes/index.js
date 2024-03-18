const express = require('express');
const router = express.Router();
const gradesController = require('../controllers/gradeControlles');

router.get('/api/all/grade', gradesController.getAllGrades);
router.get('/api/grade/id/:id', gradesController.getGradeById);

module.exports = router;