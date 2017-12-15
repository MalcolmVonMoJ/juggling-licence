var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post("/juggling-trick",function(req,res) {
  var jugglingBalls = req.session.data["juggling-balls"];
  if (jugglingBalls == "Three or more") {
    res.redirect("/juggling-trick")
  } else {
    res.redirect("/ineligible")
  }
})

router.post("/juggling-balls",function(req,res) {
  var swallow = req.session.data["swallow"];
  if (swallow >21 &&  swallow <27 ) {
    res.redirect("/juggling-balls")
  } else {
    res.redirect("/ineligible-swallow")
  }
})

module.exports = router
