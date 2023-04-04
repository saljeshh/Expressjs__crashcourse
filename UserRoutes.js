const express = require('express');
const registerUser = require('./UserController')

const router = express.Router();



// router.route("/api/v1/register").post(registerUser);
// router.route("/api/v1/register").get((req,res)=> {
//     res.send("Wor")
// })

// we dont need to write /api/v1 now cuz its in index.html middleware prefix

router.route("/register").post(registerUser);
router.route("/register").get((req,res)=> {
    res.send("Wor")
})
router.route("/product").delete(registerUser);


module.exports = router;