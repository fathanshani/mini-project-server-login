import { Router } from 'express';

const router = Router();


router.get('/categories', getAllCategories) 
router.get('/categories/:id', getCategoryById) 
router.post('/categories', createCategory)
router.patch('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

export default router;