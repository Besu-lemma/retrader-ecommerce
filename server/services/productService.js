import Product from "../models/Product";

const getAllProducts=async()=>{
    return await Product.find().sort({createdAt:-1})
}

const getProductById = async (id) =>{
const product =await Product.findById(id)
if(!product)
{
    throw new Error ("product does not found")
}
else{
    return product;
}
}

const createProduct= async (data)=>{
    return await Product.create(data)
}

const updateProduct= async (id,data)=>{
    const product= await Product.findById(id, data,{
       new:true,
        runValidator:true, 
    })
    if(!product){
        throw new Error("product does not exist")
    }
    else{
       return product;
    }
}

const deleteProduct = async (id)=>{
    const product=await Product.findAndDelete(id)
    if (!product){
        throw new Error ("product not found")
    }
    else{
        return product
    }
}

export default{
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}