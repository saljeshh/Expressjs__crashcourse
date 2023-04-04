const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./UserRoutes');

const app = express();
const port = 4000

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use("/api/v1",router)


/*
app.get("/",(req,res) =>{
    // res.send("<h1>Welcome</h1>")
    console.log(path.join(__dirname + "/login.html"))
    res.sendFile(path.join(__dirname + "/login.html"));
})

app.post("/api/v1/register",(req,res) =>{
    console.log("name")
    //const user = req.body.name;
    res.send(`<h1>Done Mr.${req.body.name}</h1>  <h2>${req.body.email}</h2>`)
    console.log(req.body)

})

*/

app.get("/",(req, res) =>{
    // res.json({
    //     name: "saljesh",
    //     email: "sample@gmail.com",
    //     password: "m9943nd8"
    // })
    res.sendFile(path.join(__dirname+ "/login.html"))

})

// app.post("/api/v1/register",(req,res)=> {

//     const name = req.body.name
//     const email = req.body.email
//     const password = req.body.password

//     res.json(({
//         success: true,
//         data: {
//             name:name, email:email, password:password
//         }
//     }))
// })

app.listen(port,() => {
    console.log(`listening on port: ${port} `)
})