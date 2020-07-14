import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import { ShoeDataContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

//logo
import Logo from "../assets/images/Logo.png";
//ICONS
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  NavStyle1: {
    "& .logo": {
      width: "80px",
      height: "40px",

      [theme.breakpoints.down("sm")]: {
        color: "#C70039",
      },
    },
    "& .navButton": {
      color: "white",

      [theme.breakpoints.down("sm")]: {
        fontWeight: 500,
      },
    },
  },
  NavStyle2: {
    "& .navButton": {
      color: "white",

      [theme.breakpoints.down("sm")]: {
        color: "white",
        fontWeight: 500,
      },
    },
  },
}));
const Header = () => {
  const [navStyle, setNavStyle] = useState("");
  const [status, setstatus] = useState("top");
  //getting number of cart
  const { cartItems } = useContext(ShoeDataContext);

  useEffect(() => {
    // for bg color on backgroun
    document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        if (status !== "amir") {
          setstatus("amir");
        }
      } else {
        if (status !== "top") {
          setstatus("top");
        }
      }
    });
  }, [status]);

  const classes = useStyles();

  return (
    <div
      id="mynav"
      className={`fixed h-20 justify-between flex items-center w-full p-4 ${classes.NavStyle1} ${navStyle}`}
      style={{
        backgroundColor: status === "top" ? "transparent" : "#C70039",

        zIndex: 100,
      }}
      // style={{ zIndex: 100 }}
    >
      <div className=" px-4">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className=" px-4 navButton ">
        <span
          className={`navButton text-sm sm:text-lg sm:mx-2 mx-1 hover:text-pink-400  transition ease-in duration-300`}
        >
          <Link to="/" onClick={() => setNavStyle(classes.NavStyle1)}>
            Home
          </Link>
        </span>
        <span
          className={`navButton text-sm  sm:text-lg  sm:mx-2 mx-1 hover:text-pink-400  transition ease-in duration-300`}
        >
          <Link to="/shop" onClick={() => setNavStyle(classes.NavStyle2)}>
            Shop
          </Link>
        </span>
        <span
          className={`navButton md:text-xl text-lg  sm:mx-2 hover:text-pink-400  transition ease-in duration-300`}
        >
          <Link to="/cart" onClick={() => setNavStyle(classes.NavStyle2)}>
            <IconButton aria-label="cart" className="focus:outline-none">
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon style={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Link>
        </span>
      </div>
    </div>
  );
};
// var myNav = document.getElementById("mynav");
// window.onscroll = function () {
//   "use strict";
//   if (document.body.scrollTop >= 200) {
//     myNav.classList.add("nav-colored");
//     myNav.classList.remove("nav-transparent");
//   } else {
//     myNav.classList.add("nav-transparent");
//     myNav.classList.remove("nav-colored");
//   }
// };
export default Header;
