const Router = require('express')
const TaskController = require('../controllers/Task.controller');

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/tasks', TaskController.getTasks);
router.post('/tasks', TaskController.createTask);
router.get('/tasks/:id', TaskController.deleteTask);

module.exports = router;
