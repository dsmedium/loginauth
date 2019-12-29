const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')



dotenv.config()

// import routes
const authRoute = require('./routes/auth.js')
const dataRoute = require('./routes/info.js')

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },()=>{
  console.log('connected')
})

// middlewares

app.use(express.json());

app.use('/api/user', authRoute)
app.use('/api/user', dataRoute)

port = process.env.PORT || 3300



// app.get('/api',(req,res)=>{
//   res.json({
//     message : 'hello api'
//   })
// })
//
// app.post('/api/post',verifyToken,(req,res)=>{
//   res.json({
//     message :  'message posted'
//   })
// })
//
// app.post('/api/login', (req,res)=>{
//   const user = {
//     id : 1,
//     username : 'nizami',
//     email : 'nizami@email.com'
//   }
//
//   jwt.sign({user:user}, 'secretkey', (err,token)=>{
//     res.json({
//       token
//     })
//   })
// })
//
// function verifyToken(req,res,next){
//   //get the auth header value
//   const bearerHeader = req.headers['authorization']
//
//   //check if token is undefined
//   if(typeof bearerHeader !== 'undefined'){
//
//     const bearer = bearerHeader.split(' ')
//     const bearerToken = bearer[1]
//     req.token = bearerToken;
//     next()
//   }
//   else{
//     res.json({
//       message : '403 forbidden access'
//     })
//   }
// }

app.listen(port)
