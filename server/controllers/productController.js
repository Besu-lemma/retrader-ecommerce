import *as productService from "../services/productService.js";

const getAllProducts=async(req, res, next)=>{
    try{
    const products= await productService.getAllProducts()
    res.status.json(products)
    }
 catch(error){
next(error);
 }
}
const getProductById= async (req, res, next)=>{
    try{
        const product=await productService.getProductById(req.params.id);
        res.status(200).json(product)
    }
    catch(error){
next(error)
    }
}

const createProduct=async(req, res, next)=>{
    try{
        const product=await productService.createProduct(req.body)
        res.status(200).json(product)
}
catch(error){
next(error)
    }
}

const updateProduct =async(req,res, next)=>{
    try{
        const product=await productService.updateProduct(req.params.id, data)
        res.status(200).json(product)
    }
    catch(error){
        next(error)
    }
}