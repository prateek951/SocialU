const express = require("express");
const router = express.Router();

/*@route GET /api/users/test*/
/*@desc Test the users route*/

/*@access Public*/

router.get("/test", (req, res) => {
  res.send("Hello yusers");
});

module.exports = router;
