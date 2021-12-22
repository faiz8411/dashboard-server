const express = require('express')
const app = express()
const port = 5000
require('dotenv').config()


app.get('/', (req, res) => {
    res.send('Hello dashboard!')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})