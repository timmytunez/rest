const express = require('express')
const app = express()
const port = 7500

// introducing user routes to server

const userRouter = require('./route/user')
app.use(userRouter)




app.listen(port, ()=>{
    console.log('server is sucessful')
})