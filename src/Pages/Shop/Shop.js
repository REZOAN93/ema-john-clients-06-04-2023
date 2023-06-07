import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ product}) => {
  const { img, name, price, seller, ratings, _id } = product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-2 pt-2">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-left text-left">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">Price: ${price}</p>

        <div className="flex justify-between mt-10 ">
          <div>
            <p className="text-sm font-bold">Seller: {seller}</p>
            <p className="text-sm font-light">Rating: {ratings} star</p>
          </div>
          <div className="card-actions">
            <Link className="btn btn-active hover:bg-slate-600 hover:text-white" to={`/order/${_id}`}>Add to Cart</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
