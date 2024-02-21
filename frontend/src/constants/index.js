import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineUserAdd
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export const navigationMenu = [
  {
    link: "/",
    icon: AiOutlineHome,
    label: "Home",
    size: 32
  },
  {
    link: "/shop",
    icon: AiOutlineShopping,
    label: "Shop",
    size: 32
  }
];

export const loginMenu = [
  {
    link: "/login",
    icon: AiOutlineLogin,
    label: "Login",
    size: 32
  },
  {
    link: "/register",
    icon: AiOutlineUserAdd,
    label: "Register",
    size: 32
  }
];

export const adminLinks = [
  {
    link: "/admin/dashboard",
    label: "Dashboard"
  },
  {
    link: "/admin/allproductslist",
    label: "Products"
  },
  {
    link: "/admin/categorylist",
    label: "Category"
  },
  {
    link: "/admin/orderlist",
    label: "Orders"
  },
  {
    link: "/admin/userlist",
    label: "Users"
  }
];
