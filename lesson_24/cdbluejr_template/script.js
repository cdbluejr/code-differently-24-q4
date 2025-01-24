const express = require("express")
const app = express()
const port = 5500
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async(req, res) => {
    res.send("this is working")
})

app.post("/custinfo", (req, res) => {
  const { "first-name": firstName, "middle-inital": middleInitial, "last-name": lastName, suffix, email, information } = req.body;
  
  console.log("Form submitted:", { firstName, middleInitial, lastName, suffix, email, information });

  res.send(`
    <h1>Information Submitted Successfully!</h1>
    <p><strong>Complete Name:</strong> ${firstName} ${middleInitial} ${lastName} ${suffix}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Additional Information:</strong> ${information}</p>
  `);
});

app.listen(port, () => {
    console.log('Did this really work?')
})