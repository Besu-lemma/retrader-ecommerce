import *as productService from "../services/productService.js";

const getAllProducts=async(req, res, next)=>{
    try{
        const page=parseInt(req.query.page, 10)||1;
        const limit=parseInt(req.query.limit, 10)||20;
        const result= await productService.getAllProducts({page, limit})
    res.status.json(result)
    }
 catch(error){
next(error);
 }
}
const getProductById= async (req, res, next)=>{
    try{
        const {id}=req.params
        const product=await productService.getProductById(id);
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
        const {id}=req.params
        const product=await productService.updateProduct(id, data)
        res.status(200).json(product)
    }
    catch(error){
        next(error)
    }
}
const deleteProduct=async(req, res, next)=>{
    const {id}=req.params
    try{  await productService.deleteProduct(id)
    res.status(200).json({message:"the product is deleted successfully", data:deleted})
}
catch(error){
    next(error)
}
}
export default{
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}