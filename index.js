const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
    "slackUsername": "mN",
    "backend": true,
    "age": 23,
    "bio": "My name is Mas'ud Ndatsu and I have been coding for like 2 years now. I hope that with the connections and oppurtunities that comes with this internship. I can secure a backend (Nodejs) developer role. This is the sad truth about me :( ."
 })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`))