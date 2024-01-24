import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên sản phẩm"],
      maxLength: [200, "Tên sản phẩm không quá 200 ký tự"],
    },
    price: {
      type: Number,
      required: [true, "Vui lòng nhập giá sản phẩm"],
      maxLength: [10, "Gía sản phẩm không quá 10 số"],
    },
    description: {
      type: String,
      required: [true, "Vui lòng nhập mô tả sản phẩm"],
    },
    status: {
      type: String,
      required: [true, "Vui lòng nhập trạng thái sản phẩm"],
    },
    stock: {
      type: Number,
      required: [true, "Vui lòng nhập số lượng sản phẩm"],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Vui lòng nhập danh sách sản phẩm"],
      maxLength: [200, "Danh sách sản phẩm không quá 200 ký tự"],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Product", productSchema);
