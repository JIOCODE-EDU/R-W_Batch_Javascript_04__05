import Product from '../models/Product.js'
import Order from '../models/Order.js'

// place order

export const placeOrder = async(req , res) => {
  try{

    const {items , address} = req.body

    if(!items || !items.length === 0){
      return res.status(400).json({
        success:false,
        message:"Cart is empty. Add Product first."
      })
    }

    if(!address){
      return res.status(400).json({
        success:false,
        message:"Delivery address is required."
      })
    }


    let totalAmount = 0;

    const orderItems = [];

    for(let item of items){

      const product = await Product.findById(item.productId)

      if(!product){
        return res.status(404).json({
          success:false,
          message:`Product not found : ${item.productId}`
        })
      }

      if(product.stock < item.quantity){
        return res.status(400).json({
          success:false,
          message:`Not enough stock for ${product.name}. Available:${product.stock}`
        })
      }

      const itemTotal = product.price * item.quantity

      totalAmount += itemTotal;

      orderItems.push({
        product:product._id,
        quantity:item.quantity,
        price:product.price
      })

      await Product.findByIdAndUpdate(product._id , {stock:product.stock - item.quantity});
    }

    const order = await Order.create({
      user:req.user._id,
      items:orderItems,
      totalAmount,
      address,
      status:"Pending"
    })

    const populatedOrder = await Order.findById(order._id)
    .populate("items.product" , "name price image")
    .populate("user" , "name email")

    res.status(201).json({
      success:true,
      message:"Order placed Successfully!.",
      order:populatedOrder
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}

// logged in user can see their own orders (user)

export const getMyOrders = async(req , res) => {
  try{
    const orders = await Order.find({user:req.user._id})
    .populate("items.product" ,'name price image')
    .sort({createdAt:-1})

    res.status(200).json({
      success:true,
      count:orders.length,
      orders
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}

// Only admin can see all orders from all users

export const getAllOrders = async(req , res) => {
  try{
    const orders = await Order.find()
    .populate("user" , "name email")
    .populate("items.product" , "name price image")
    .sort({createdAt:-1}) 

    res.status(200).json({
      success:true,
      count:orders.length,
      orders
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}

// Admin can change order status: pending -> Processing -> Shipped -> Deliverd

export const updateOrderStatus = async(req , res) => {
  try{
    const {status} = req.body

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {status},
      {new:true}
    ).populate("user" , "name email")

    if(!order){
      return res.status(404).json({
        success:false,
        message:"Order not found."
      })
    }

    res.status(200).json({
      success:true,
      message:`Order Status updated to ${status}`,
      order
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}





