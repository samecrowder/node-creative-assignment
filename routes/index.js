var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('babyName.html', { root: 'public/html' });
});

/*GET BOY NAME*/
router.get('/getBoy', function(req, res, next) {
    console.log("In getBoy route");
    var fs = require('fs');
    fs.readFile(__dirname + '/male_first.txt', function(err, data) {
        if (err) throw err;
        var boyList = data.toString().split("\n");

        var jsonresult = boyList[Math.floor(Math.random() * boyList.length)];
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});


/*GET Girl NAME*/
router.get('/getGirl', function(req, res, next) {
    console.log("In getGirl route");
    var fs = require('fs');
    fs.readFile(__dirname + '/female_first.txt', function(err, data) {
        if (err) throw err;
        var girlList = data.toString().split("\n");

        var jsonresult = girlList[Math.floor(Math.random() * girlList.length)];
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

module.exports = router;
