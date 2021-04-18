import React from "react";
import { Link } from "react-router-dom";

const SecondNav = () => {
  return (
    <div className="hidden md:flex md:py-2 justify-center  bg-gray-200">
      <ul className="flex flex-row">
        <li className="pr-2 hover:bg-gray-300">
          <Link>Products</Link>
        </li>
        <li className="pr-2 hover:bg-gray-300">
          <Link>Products</Link>
        </li>
        <li className="pr-2 hover:bg-gray-300">
          <Link>Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default SecondNav;
