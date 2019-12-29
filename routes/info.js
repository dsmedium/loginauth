const router  = require('express').Router()
const verify = require('./verifyToken.js')

router.get('/data', verify,(req,res)=>{
  res.json({"message": "this route is protected"})
})

module.exports = router;
