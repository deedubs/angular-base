var express = require('express')
  , router = express();

router.use(express.favicon());
router.use(express.static('./public'));

router.get('/narf', function (res, res) {
  res.send(401);
});

router.use(function (req, res, next) {
  
  if (req.accepts('text/html'))
    res
      .sendfile('public/index.html', {maxAge: 60000});
  else
    next();
});

if (process.env.PORT) {
  router.listen(process.env.PORT);
}