const express = require('express')

const tiket = require('../controller/tiket.controller')

const router = express.Router()

router.route('/tiket')
    .get(tiket.create)
    .post()
    .put()
    .delete()

router.route('/tiket/:id')
    .get(tiket.create)
    .post()
    .put()
    .delete()


module.exports = router