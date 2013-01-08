var express = require('express')
  , router = express();

router.use(express.static('./public'));

if (process.env.PORT) {
  router.listen(process.env.PORT);
}