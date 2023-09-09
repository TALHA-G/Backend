const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const mongoose = require('mongoose')



app.use(express.json())
app.use('/api/students',studentsRoutes)



mongoose.connect('mongodb+srv://mtalhagujjar285:mt@lh@gujj@r@talha-cluster.wp71qfl.mongodb.net/talha?retryWrites=true&w=majority').then((res)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server is running!")
})