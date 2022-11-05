import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthContext from "../pages/context/authContext";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div
      // className="navbar bg-base-300 px-20 flex place-items-center place-content-center"
      className="flex justify-between bg-base-300 px-2 py-2"
    >
      <div className="container">
        <Link href="/" className="btn btn-ghost normal-case text-lg">
          Contents Bank
        </Link>
      </div>
      <div className="">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>

          {loggedIn ? (
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/admin/table" className="justify-between">
                  Table
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/add">Add Content</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <Link href="/login">Login</Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
