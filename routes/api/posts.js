const express = require('express');
const router = express.Router();

/*@route GET /api/posts/test*/
/*@desc Test the post route*/ 
/*@access Public*/

router.get('/test',(req, res) => {
    res.send('Hello Postss');
});

module.exports = router;