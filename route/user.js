const express = require('express')
const router =  express.Router()

router.get('/user', (req,res) => { 
    res.send('Welcome to user page')
})
router.get('/user/:id', (req,res)=>{
    res.send('Welcome to one user')
})

router.post('/user', (req,res)=>{
    res.send('New user added')
})
router.put('users/:id', (req,res)=>{
    res.send('Update user')
})
router.delete('user/id', (req,res)=>{
    res.send('Dlete user')
})


module.exports = router