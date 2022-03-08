const router = require('express').Router()
const Category = require('../controllers/category')
router.route('/category')
      .get( Category.get )
      .post( Category.post )
      .delete( Category.delete )
      .put( Category.update )
module.exports = router
