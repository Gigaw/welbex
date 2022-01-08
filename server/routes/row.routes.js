const Router = require('express')
const rowController = require('../controller/row.controller')
const router = new Router()

router.get('/row', rowController.getRows)
router.post('/row', rowController.createRow)

module.exports = router