const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1> 99 bottle of beer on the wall </h1> <a href='http://localhost:3000/98'> take one down pass it around</a>`)

})
app.get('/:number_bottles', (req, res) => {
    let num = (req.params.number_bottles)
    if (num == 0){
        res.send(`<h1>No more bottles of beer :(</h1> <a href='http://localhost:3000/'> Go get more beer?</a>`)   
    } else {
        res.send((`<h1> ${num} bottles of beer on the wall </h1> <a href='http://localhost:3000/${num-1}'> take one down pass it around</a>`))
    }
    
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})

