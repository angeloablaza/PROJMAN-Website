const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public"))) //so we can access outside folders

app.get("/", (req, res)=>{
//    res.sendFile(path.join(__dirname, "index.html"))
    // res.sendFile(__dirname + "/index.html")
    res.send("hello")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("listening at port 3000")
})
