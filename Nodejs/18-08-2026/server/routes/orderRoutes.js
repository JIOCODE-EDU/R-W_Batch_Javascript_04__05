import express from 'express'
import { placeOrder , getMyOrders , getAllOrders , updateOrderStatus } from '../controllers/orderControllers.js'
import { verifyToken , verifyAdmin } from '../middleware/authMiddleware.js'

const orderRoutes = express.Router()

orderRoutes.post('/' , verifyToken , placeOrder)
orderRoutes.get('/my' , verifyToken , getMyOrders)
orderRoutes.get('/' , verifyToken , verifyAdmin , getAllOrders)
orderRoutes.put('/:id/status' , verifyToken , verifyAdmin , updateOrderStatus)


export default orderRoutes