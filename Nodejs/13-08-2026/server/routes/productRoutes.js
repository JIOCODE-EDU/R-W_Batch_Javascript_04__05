import express from 'express'
import {getAllProducts , getProductById , addProduct , updateProduct , deleteProduct} from '../controllers/productContarollers.js'
import { verifyAdmin, verifyToken } from '../middleware/authMiddleware.js'


const productRoutes = express.Router()

productRoutes.get('/' , getAllProducts)
productRoutes.get('/:id' , getProductById)
productRoutes.post('/' , verifyToken , verifyAdmin , addProduct)
productRoutes.put('/:id' , verifyToken , verifyAdmin , updateProduct)
productRoutes.delete("/:id" , verifyToken , verifyAdmin , deleteProduct)


export default productRoutes                        