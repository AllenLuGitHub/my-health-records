const express = require("express")
const router = express.Router()

const path = require('path');
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")
const fs = require("fs");
const dotenv = require('dotenv').config()

const checkAuthenticated = require("../functions/checkAuth")
const checkNotAuthenticated = require("../functions/checkNotAuth");
const getUsers = require("../functions/getUsers")

const MongoClient = require('mongodb').MongoClient;


async function addUser(document) {

  const uri = process.env.MONGO_CONNECTION;
  const client = new MongoClient(uri, { useNewUrlParser: true });

  // Connect to the client and query
  await client.connect();

  await client
    .db('UserDatabase')
    .collection('userInfo')
    .insertOne(document)

  client.close();
  return;
}

var usersInDB = []

router.get('/', checkNotAuthenticated, async (req, res) => {
  //usersInDB = await getUsers();
  res.render('register.ejs', { name: '' })
})

var appEmailUsername = process.env.GMAIL_USER
var appOnlyPassword = process.env.GMAIL_APP_PASS

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: appEmailUsername,
    pass: appOnlyPassword // get this password from the peer evaluation sheet we turned in 
  }
});

router.post('/', checkNotAuthenticated, async (req, res) => {
  usersInDB = await getUsers();

  var errorString = 'There was an error creating your account';

  try {
    if (req.body.password != req.body.confirmPassword) {
      console.log("passwords didnt match")
      errorString = 'Please enter matching passwords'
      throw ('error')
    }
    for (i = 0; i < usersInDB.length; ++i) {
      console.log(usersInDB[i].email)
      if (req.body.email == usersInDB[i].email) {
        errorString = `An account with the email "${req.body.email}" already exists, please use a different email address`
        throw "error"
      }
    }
    uid = Math.floor(100000 + Math.random() * 900000)
    for (i = 0; i < usersInDB.length; ++i) {
      if (uid == usersInDB[i].id) {
        uid = Math.floor(100000 + Math.random() * 900000)
        i = 0
      }
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    await addUser({
      id: uid,
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    var textBody = `Hi ${req.body.name}, we hope you enjoy using our application. \r\n\r\n -The MHR team`

    var message = {
      from: appEmailUsername,
      to: req.body.email,
      subject: "Thanks for signing up for my health records!",
      text: textBody,
    };

    transport.sendMail(message, function (err) {
      if (err) {
        console.log("there was an error", err);
        res.send("there was an error sending your message ")
        return;
      }
      console.log("email sent");
    });

    res.redirect(301, '/register/registerSuccess')

  } catch (e) {
    console.log("error caught", e)
    res.render('register.ejs', {
      name: errorString
    })
  }
})

router.get('/registerSuccess', checkNotAuthenticated, (req, res) => {
  res.render('registerSuccess.ejs')
})

module.exports = router
