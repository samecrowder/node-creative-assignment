var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('babyName.html', { root: 'public/html' });
});

/*GET BOY NAME*/
router.get('/getBoy', function(req, res, next) {
    var fs = require('fs');
    fs.readFile(__dirname + '/male_first.txt', function(err, data) {
        if (err) throw err;
        var boyList = data.toString().split("\n");

        var jsonresult = boyList[Math.floor(Math.random() * boyList.length)];
        res.status(200).json(jsonresult);
    });
});


/*GET Girl NAME*/
router.get('/getGirl', function(req, res, next) {
  console.log("IN GET GIRL")
    var fs = require('fs');
    fs.readFile(__dirname + '/female_first.txt', function(err, data) {
        if (err) throw err;
        var girlList = data.toString().split("\n");

        var jsonresult = girlList[Math.floor(Math.random() * girlList.length)];
        res.status(200).json(jsonresult);
    });
});

router.get('/funFact/:month/:day', function(req, res, next) {
  var url = 'http://history.muffinlabs.com/date/' + req.params.month + '/' + req.params.day;
  var req = http.get(url, function(result) {
    var bodyChunks = [];
    result.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
      var body = Buffer.concat(bodyChunks);
      res.send(body);
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
});

module.exports = router;
