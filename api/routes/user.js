const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId",  UserController.user_delete);//checkAuth,

router.get('/', UserController.user_see_all);


module.exports = router;