const express = require("express");
const router = express.Router();

/*@route GET /api/profile/test*/
/*@desc Test the profile route*/

/*@access Public*/

router.get("/test", (req, res) => {
  res.send("Hello Porfile");
});

module.exports = router;
