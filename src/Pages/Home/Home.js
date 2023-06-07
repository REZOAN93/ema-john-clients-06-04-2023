import React, { useEffect, useState } from "react";
import Shop from "../Shop/Shop";
import Cart from "../Cart/Cart";
import { addToDb } from "../../fakedb";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full flex my-5">
      <div className=" w-9/12 grid grid-cols-3 gap-4 ml-3 mr-3">
        {products.map((pr) => (
          <Shop key={pr._id} product={pr}></Shop>
        ))}
      </div>
      <div className="w-3/12">
        <div className="h-96 my-5 mx-2 py-2 px-2 border-2 rounded-lg ">
          <h1 className="text-center text-lg underline font-bold">
            Order Sumarry
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Selected Items</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <td>Total Price</td>
                  <td>Blue</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Total Shipping</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>Blue</td>
                </tr>
                <tr className="font-bold overline decoration-double">
                  <td>Grand Total</td>
                  <td>Blue</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center items-center mt-5">
              <Link className="btn" to={"/order"}>Order Review</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
