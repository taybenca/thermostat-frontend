if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const API_KEY = process.env.API_KEY
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req,res) => {

})

app.listen(3000, () => {
    console.log('Server Started')
})
