import Product from "../models/Product";

const getAllProducts = async ({ page = 1, limit = 20 } = {}) => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Product.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Product.countDocuments(),
  ]);

  return {
    data,
    meta: {
      total,
      page,
      limit,
    },
  };
};


const getProductById = async (id) =>{
const product =await Product.findById(id)
if(!product)throw new Error ("product does not found")
return product

}
//Whether you create a variable or 
// return directly depends on whether you need to do something with the result before returning it.
const createProduct= async (data)=>{
return await Product.create(data)
}

const updateProduct= async (id,data)=>{
    const product= await Product.findByIdAndUpdate(id, data,{
       new:true,
        runValidator:true, 
    })
    if(!product) throw new Error("product does not exist")
       return product;
    
}

const deleteProduct = async (id)=>{
    const product=await Product.findByIdAndDelete(id)
    if (!product) throw new Error ("product not found")
        return product
    
}

export default{
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}