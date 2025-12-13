import mongoose from 'mongoose'

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: false,
        trim: true,
        minlength:10,
        maxlength:500
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    validate: {
        validator: function(v) {
            return v >= 0;
        },
        message: props => `${props.value} is not a valid price! Price must be non-negative.`
    }
    
    },
   status: {
  type:String,
  enum:['available','sold out]']
    },
    inStock:{
        type: Boolean,
        default: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
}
)

const Product = new mongoose.model("Product", productSchema)

export default Product;