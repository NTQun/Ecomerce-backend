const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    shippingInfo: {
      firstName: {
        type: String,
        require: true,
      },
      lastName: {
        type: String,
        require: true,
      },
      mobile: { type: String, require: true },
      email: { type: String, require: true },

      address: {
        type: String,
        require: true,
      },
    },
    typecheckout: {
      type: String,
      require: true,
    },
    paymentInfo: {
      razorpayOrderId: {
        type: String,
        // require: true,
      },
      razorpayPaymentId: {
        type: String,
        // require: true,
      },
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          require: true,
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Color",
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
        price: {
          type: Number,
          require: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    month: {
      type: String,
      default: new Date().getMonth(),
    },
    totalPrice: {
      type: Number,
      require: true,
    },
    totalPriceAfterDiscount: {
      type: Number,
      require: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
    comment: { type: String },
    orderShipper: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
