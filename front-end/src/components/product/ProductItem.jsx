import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "../css/style.css";
const ProductItem = ({ product, columnSize }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3 `}>
      <div className="card p-3 rounded item4">
        <Link to={`/product/${product?._id}`}>
          <img
            className="card-img-top mx-auto"
            src={
              product?.images[0]
                ? product?.images[0]?.url
                : "/images/default_product.png"
            }
            alt={product?.name}
          />
        </Link>
        <div className=" card-body ps-3 d-flex justify-content-center flex-column ">
          <h5 className="card-title">
            <Link to={`/product/${product?._id}`}>{product?.name}</Link>
          </h5>
          <div className="ratings mt-auto d-flex">
            <div className="star-ratings">
              <StarRatings
                rating={product?.ratings}
                starRatedColor="#ffb829"
                numberOfStars={5}
                name="rating"
                starDimension="22px"
                starSpacing="1px"
              />
            </div>
            <span id="no_of_reviews" className="pt-2 ps-2">
              {" "}
              ({product?.numOfReviews})
            </span>
          </div>
          <p className="card-text mt-2">${product.price}</p>
          <p className="card-text mt-2">{product.description}</p>
          <Link
            to={`/product/${product?._id}`}
            id="view_btn"
            className="btn btn-block buy-button bg-danger"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
