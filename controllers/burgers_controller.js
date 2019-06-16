var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    res.redirect('/index');
  });

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.post('/api/burgers/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('/index');
    });
});


module.exports = router;