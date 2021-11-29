const express = require("express")
const router = express.Router()

const passport = require('passport')
const checkAuthenticated = require("../functions/checkAuth")
const checkNotAuthenticated = require("../functions/checkNotAuth")
const getUsers = require("../functions/getUsers")

const initializePassport = require('../passport-config')


var usersInDB = [];
async function getData() {
  usersInDB = await getUsers();
  return 0;
}

initializePassport(
  passport,
  email => usersInDB.find(user => user.email === email),
  id => usersInDB.find(user => user.id === id)
)

router.get('/', checkNotAuthenticated, (req, res) => {
  getData();
  res.render('login.ejs')
})

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

module.exports = router