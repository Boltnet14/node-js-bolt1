import {Router} from 'express'
import { body,validationResult } from 'express-validator'
import { createProduct, getProducts, updateProduct } from './handlers/product'
import { handleInputErrors } from './modules/middleware'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdate, updateUpdate } from './handlers/update'

const router = Router()

/*
    Product
*/

router.get('/product', getProducts)
router.get('/product/:id', () => {})
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', () => {})

/*
    Update
*/

router.get('/update', getUpdate)
router.get('/update/:id', getOneUpdate)
//the body validator i
router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']),
    body('version').optional(),
    updateUpdate
)
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate
)
router.delete('/update/:id', deleteUpdate)

/*
    Update Point
*/

router.get('/updatepiont', () => {})
router.get('/updatepiont/:id', () => {})
router.put('/updatepiont/:id', () => {})
router.post('/updatepiont/', () => {})
router.delete('/updatepiont/:id', () => {})

export default router