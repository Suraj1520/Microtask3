// install express with `npm install express` 
const express = require('express')
// const axios=require("axios")
var cors=require("cors")
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('To know about any location go to /api/getAdd?lat=[latitude]&lon=[longitude]'))
app.use('/api',require('./location'))

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})



// export 'app'
module.exports = app