// const Admin = require("../models/Admin");
require("dotenv").config()

function orderPage(req, res) {
    const { password, name } = req.body
    if (!password && !name) {
        res.json({message:"password or username empty",auth:false})
    }

    if(password==process.env.PASSWORD && name==process.env.NAME)
        res.json({ message: "Admin login sucessfully", auth: true })
        else {
        res.json({ message: "wrong Auth", auth: false })
        
    }
}   

module.exports = orderPage


