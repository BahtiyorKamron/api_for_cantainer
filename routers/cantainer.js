const router = require('express').Router()
const Cantainer = require('../controllers/cantainer')
router.route('/cantainer')
      .get( Cantainer.get )
      .post( Cantainer.post )
      .delete( Cantainer.delete )

module.exports = router
