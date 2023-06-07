import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthPorvider";
import Orderinfo from "./Orderinfo";
import { Link, useLoaderData } from "react-router-dom";

const Order = () => {
    const products = useLoaderData();
  const { user } = useContext(AuthContext);
  const [orderlist, setOrderList] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user?.email]);

  const handleDeleteOrder = (id) => {
    const procced = window.confirm("would you like to delete this User");
    if (procced === true) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order is Deleted");
            const remainingorder = orderlist.filter((or) => or._id !== id);
            setOrderList(remainingorder);
          }
        });
    }
  };

  return (
    <div className="flex">
      <div className="w-9/12 overflow-x-auto mx-5 my-5 rounded-lg ">
        <table className="table ">
          {/* head */}
          <thead className="bg-slate-200 ">
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

          {/* row 1 */}
          {orderlist.map((or) => (
            <Orderinfo
              order={or}
              handleDeleteOrder={handleDeleteOrder}
              products={products}
            ></Orderinfo>
          ))}

          {/* foot */}
        </table>
      </div>
      <div className="w-3/12 h-96 my-5 mx-2 py-2 px-2 border-2 rounded-lg ">
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
        </div>
        <div className="text-center items-center mt-5">
              <Link className="btn" to={"/order"}>Procced Shipping</Link>
            </div>
      </div>
    </div>
  );
};

export default Order;
