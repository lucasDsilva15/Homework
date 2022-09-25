const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1> 99 bottle of beer on the wall </h1> <a href='http://localhost:3000/98'> take one down pass it around</a>`)

})
app.get('/bugs', (req, res) => {
    res.send(`<h1> 99 bugs in the code, 99 bugs to debug! </h1> <a href='http://localhost:3000/bugs/98'> debug a bug run a test!</a>`)
})
app.get('/:number_bottles', (req, res) => {
    let num = (req.params.number_bottles)
    if (num == 0){
        res.send(`<h1>No more bottles of beer :(</h1> <a href='http://localhost:3000/'> Go get more beer?</a>`)   
    } else {
        res.send(`<h1> ${num} bottles of beer on the wall </h1> <a href='http://localhost:3000/${num-1}'> take one down pass it around</a>`)
    }
    
})


app.get('/bugs/:errors', (req, res) => {
    let err = (req.params.errors)
    let numb = Math.floor(Math.random() * 20)
    console.log(numb)
    console.log(err)
    if (err == 0){
        res.send("<h1>No more bugs in the code! (thanks stack overflow)</h1> <a href='http://localhost:3000/bugs'> Code a new program?</a>")
    }
    if (numb === 2){
        let numb2 = Math.floor(Math.random() * 30)
        err = Number(err) + numb2
        res.send(`<h1> ${err} bugs in the code, ${err} bugs to debug! </h1> <a href='http://localhost:3000/bugs/${err-1}'> debug a bug run a test!</a>`)
    } else {
        res.send(`<h1> ${err} bugs in the code, ${err} bugs to debug! </h1> <a href='http://localhost:3000/bugs/${err-1}'> debug a bug run a test!</a>`)  
    }
    
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

