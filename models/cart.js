const mongooose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductcartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const Productcart = mongoose.model("Productcart", ProductcartSchema);

const CartSchema = new mongoose.Schema(
  {
    products: [ProductcartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: { type: String },
    updated: { type: Date, default: Date.now },
    user: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = { cart, Productcart };
