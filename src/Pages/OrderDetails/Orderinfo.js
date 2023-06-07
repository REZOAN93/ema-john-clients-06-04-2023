import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Orderinfo = ({ order, handleDeleteOrder, products }) => {
  const [orderporduct, setOrderProduct] = useState({});
  const { email, name, address, product, _id } = order;
 
  useEffect(() => {
    fetch(`http://localhost:5000/order/${product}`)
      .then((res) => res.json())
      .then((data) => setOrderProduct(data));
  }, [product]);

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-ghost text-xl font-bold"
              type="submit"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-28 h-28">
                <img
                  src={orderporduct.img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{orderporduct.name}</div>
              <div className="text-sm opacity-50">{orderporduct.seller}</div>
              <div className="text-sm opacity-50">{orderporduct.category}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          {name}
          <br />
          {address}
        </td>
        <td className="font-bold">$ {orderporduct.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
  );
};

export default Orderinfo;
