import { Router } from 'express';
import { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getAllProducts); // contoh route, jika memerlukan url params gunakan -> /products/:id
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)


export default router;