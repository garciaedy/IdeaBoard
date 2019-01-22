const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const ideaController = require('../controllers/ideaController')

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:id', userController.show)
router.delete('/users/:id', userController.delete)
router.put('/users/:id', userController.update)

router.get('/users/:userId/ideas', ideaController.index)
router.get('/ideas/:id', ideaController.show)
router.delete('/ideas/:id', ideaController.delete)
router.post('/users/:userId/ideas', ideaController.create)
router.put('/ideas/:id', ideaController.update)

module.exports = router