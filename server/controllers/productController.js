import Product from "../models/Product ";
// Get all products
const getAllProducts = async(req, res)=>{
    
   const product= await Product.find().sort({name:-1})
    .then((product)=>{
        res.status(200).json(product);
    })
    .catch((error)=>{
        res.status(500).json({message: error.message});
    }); 
}
//Get A product by ID 
const getProductById= async(res, req)=>{
    const id= req.parms.id;
   const product= await Product.findById(id)
    .then((product)=>{
        res.status(200).json(product);
    }
)
.catch((error)=>
res.status(400).json({message: error.message}));
}
//Create new product
const createProduct= async(req, res)=>{
   const product= await Product.Create(req.body)
   .then((product)=>
{
    res.status(200).json(product)
})
.catch((error)=>{
    res.status(401).json({message:error.message})
})
}

//Update product
const UpdateProduct= async(req, res)=>{
    const id=req.parms.id
    const product= Product.findByIdAndUpdate(id, req.body,{
        new:true,
    })
  .then((product)=>
{
    res.status(200).json(product)
})
.catch((error)=>{
    res.status(401).json({message:error.message})
})
}

//Delete product
const DeleteProduct=async (req, res)=>{
    const id=req.params.id
    const product=Product.findByIdAndDelete(id)
 .then((product)=>
{
    if (!product){  res.status(400).json(product.name = "does not exist")}
    else{res.status(200).json(product.name + "is deleted succefully")
    }
})
.catch((error)=>{
    res.status(501).json({message:error.message})
})
}

export default{
    getAllProducts,
    getProductById,
    createProduct,
    UpdateProduct,
    DeleteProduct
}