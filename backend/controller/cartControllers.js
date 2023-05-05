const Cart = require("../models/Cart")


const getCart = async (req,res) => {
     try {
         const cart = await Cart.find({}).populate("products");
        res.json(cart) 
     } catch (error) {
         console.log(error)
         res.status(500).json({message:"server error"})
     }
}
const createCart = async (req,res) => {
     try {
         const cart = await Cart.create({
           ...req.body,
         })
      
         
            res.send({
                cart,
                message: "Order Saved",
            });
         
     } catch (error) {
         console.log(error)
         res.status(500).json({message:"server error"})
     }
}



module.exports = {getCart , createCart}