import React from "react";
import { ReactComponent as MenuBar } from "../../assets/icons/icon-menu.svg";
import { Link } from "react-router-dom";
import SecondNav from "./SecondNav";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap relative items-center bg-gray-100 ">
        <div className="container px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between">
            <Link to="/" className=" text-xl font-coconpro text-purple-900 ">
              HomeSmart
            </Link>
            <button
              className="cursor-pointer text-xl leading-none md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuBar
                className="w-8 fill-current text-gray-900"
                title="menu"
              />
            </button>
            <ul className="hidden md:flex">
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-shopping-cart w-9"
                    title="shopping-cart"
                  >
                    <path
                      className="primary fill-current text-gray-400"
                      d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                    />
                    <path
                      className="secondary fill-current text-gray-900"
                      d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-heart w-9"
                    title="favourites"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="primary fill-current text-gray-400"
                    />
                    <path
                      className="secondary fill-current text-gray-900"
                      d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-user-circle w-9"
                    title="admin-login"
                  >
                    <g>
                      <path
                        className="secondary fill-current text-gray-400"
                        d="M3.66 17.52a10 10 0 1 1 16.68 0C19.48 16.02 17.86 16 16 16H8c-1.86 0-3.48.01-4.34 1.52z"
                      />
                      <path
                        className="primary fill-current text-gray-900"
                        d="M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                      />
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center transition-all duration-500 ease-in-out " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar"
          >
            <ul className="flex flex-col w-full list-none md:hidden text-gray-900">
              <li className="nav-item hover:bg-gray-200">
                <Link className="font-medium" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item hover:bg-gray-200">
                <Link className="font-medium" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item hover:bg-gray-200"></li>
            </ul>
          </div>
        </div>
      </nav>
      <SecondNav />
    </>
  );
};

export default Nav;
