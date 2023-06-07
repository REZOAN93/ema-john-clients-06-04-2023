import React, { useContext } from "react";
import img1 from "../../images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthPorvider";

const Header = () => {
  const { user, userSignout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOUt = (event) => {
    userSignout();
    navigate("/login");
  };

  const dropitem = [
    <>
      <Link className="text-xl ml-12" to={"/"}>
        Shop
      </Link>
      <Link className="text-xl ml-12" to={"/order"}>
        Orders
      </Link>
      <Link className="text-xl ml-12" to={"/"}>
        Inventory
      </Link>
      <Link className="text-xl ml-12" to={"/"}>
        About
      </Link>
    </>,
  ];

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-122"
          >
            {dropitem}
          </ul>
        </div>
        <img className="pl-28" src={img1} alt="" srcset="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{dropitem}</ul>
      </div>
      <div className="navbar-end gap-8 me-9">
        {user?.email ? (
          <>
            <Link className="text-xl font-bold" to={"/details"}>
              Details
            </Link>

            <button
              onClick={handleSignOUt}
              className="text-xl font-bold"
              type="submit"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link className="text-xl font-bold" to={"/login"}>
              Log In
            </Link>
            <Link className="text-xl font-bold" to={"/signup"}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
