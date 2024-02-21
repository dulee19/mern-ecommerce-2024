import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { adminLinks, loginMenu, navigationMenu } from "../../constants";
import "./Navigation.css";

import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import FavoriteItem from "../../components/FavoriteItem";
import CartItem from "../Products/CartItem";

const Navigation = () => {
  const { userInfo } = useSelector(state => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.success("You have successfully logged out!");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div
      id="navigation-container"
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-[#000] w-[4%] hover:w-[15%] h-[100vh] z-[50] fixed `}
    >
      <div className="flex flex-col justify-center space-y-4">
        {navigationMenu.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.link}
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            {React.createElement(navItem.icon, {
              className: "mr-2 mt-[3rem]",
              size: navItem.size
            })}

            <span className="hidden nav-item-name mt-[3rem]">
              {navItem.label}
            </span>
          </Link>
        ))}
        <CartItem />
        <FavoriteItem />
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-white">{userInfo.username}</span>
          ) : (
            <></>
          )}

          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {/* If the user is logged in */}
        {dropdownOpen && userInfo && (
          <ul
            className={`absolute right-0 mt-2 mr-14 space-y-2 bg-white text-gray-600 ${
              !userInfo.isAdmin ? "-top-20" : "-top-80"
            }`}
          >
            {userInfo.isAdmin && (
              <>
                {adminLinks.map((navItem, index) => (
                  <li key={index}>
                    <Link
                      to={navItem.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>

      {!userInfo && (
        <ul>
          {loginMenu.map((navItem, index) => (
            <li key={index}>
              <Link
                to={navItem.link}
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                {React.createElement(navItem.icon, {
                  className: "mr-2 mt-[3rem]",
                  size: navItem.size
                })}

                <span className="hidden nav-item-name mt-[3rem]">
                  {navItem.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
