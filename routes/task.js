const express = require('express');
const bodyParser = require('body-parser');
const {getAllTask, addTask, getTaskByID, updateTask, deleteTaskByID} = require('../controller/task')
const router = express.Router();

router.use(bodyParser.json());

router.get('/', getAllTask)

router.post('/', addTask)

router.get('/:id', getTaskByID)

router.patch('/:id', updateTask)

router.delete('/:id', deleteTaskByID)


module.exports = router;