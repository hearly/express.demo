var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let title = 'Home'
  let tripb2b = {
    'name' : 'Tripb2b.com',
    'url' : '//www.tripb2b.com'
  };
  let fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
  ];
  let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  let fs = require('fs');
  fs.readFile('/css/style.css', function(err, data) {
    console.log('End:' + new Date());
  });
  console.log('Begin:' + new Date());

  res.render('index', {'title': title, 'site' : tripb2b, fortune: randomFortune});
  //res.render('index', {layout: false}); //不使用框架
});

router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
