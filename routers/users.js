const router = require('express').Router()
const Registrate = require('../controllers/users')
router.route('/users')
      .get( Registrate.get )
      .post( Registrate.post )
      .delete( Registrate.delete )
      .put( Registrate.update )
module.exports = router
