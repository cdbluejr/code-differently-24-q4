const express = require("express")
const app = express()
const port = 5555
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async(req, res) => {
    res.send("this is working")
})

app.listen(port, () => {
    console.log('this is working3333')
})