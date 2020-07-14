import React, { useContext } from "react";
import { Link } from "react-router-dom";
//material ui
import {
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//css
import "../assets/css/shop.css";

//Context
import { ShoeDataContext } from "../context/GlobalContext";
//icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const myStyle = makeStyles((theme) => ({
  shopLand: {
    height: "50vh",
    width: "100%",
    clipPath: "polygon(0 0, 100% 0, 100% 91%, 0 100%)",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
  },
  shoeImg: {
    position: "absolute",
    top: 0,
    display: "block",
    margin: "0 auto",
    width: "250px",
    height: "250px",
    transform: "rotate(-30deg)",
  },
  productBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right bottom,#c70039,#ba003c,#ac033d,#9e073e,#900c3e)",
    clipPath: "ellipse(63% 81% at 82% 16%);",
  },
}));
const Shop = () => {
  const classes = myStyle();
  //   Context
  const { shoes, addToCart, cartItems } = useContext(ShoeDataContext);
  //checking if item already in cart
  let check;
  return (
    <div className="">
      <div
        className={`flex flex-col justify-center items-center shopLand  ${classes.shopLand}`}
      >
        <div className="h-full container mx-auto flex flex-col justify-center items-center text-left   px-4">
          <div>
            <Typography
              variant="h2"
              gutterBottom
              className="text-white font-bold"
              style={{ fontWeight: 600 }}
            >
              Shop
            </Typography>
            <Typography variant="h5" className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </div>
        </div>
      </div>
      {/* items */}
      <div className="mt-32">
        <Container>
          <Grid container justify="center" spacing={4}>
            {shoes.map((shoes) => (
              <Grid
                key={shoes.id}
                item
                lg={4}
                md={6}
                sm={8}
                container
                style={{
                  maxWidth: "350px",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                <div className="w-full shadow-lg">
                  <div className="h-48 relative flex justify-center mb-2">
                    <div className={classes.productBg}></div>
                    <img
                      src={shoes.image}
                      className={classes.shoeImg}
                      alt="shoe"
                    />
                  </div>
                  <div className="pt-16 pb-4 px-6">
                    <h1 className="text-lg font-bold text-gray-800">
                      {shoes.shoeName}
                    </h1>
                    <h1 className="text-md font-bold text-gray-600 pb-4">
                      {shoes.price}$
                    </h1>
                    <div className="w-full flex justify-between mt-3">
                      <Link to={`${shoes.slug}`}>
                        <Button
                          color="primary"
                          variant="contained"
                          className="focus:outline-none cursor-pointer"
                        >
                          More Info
                        </Button>
                      </Link>
                      {/* getting value in bolean */}
                      {
                        (check = cartItems.every(
                          (item) => item.id !== shoes.id
                        ))
                      }
                      {/* checking true or false */}
                      {check ? (
                        <IconButton
                          aria-label="AddShoppingCartIcon"
                          onClick={() => addToCart(shoes.id)}
                          className="focus:outline-none "
                          color="primary"
                          style={{ marginTop: "-4px" }}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      ) : (
                        <Typography
                          color="primary"
                          variant="subtitle1"
                          className="py-2"
                        >
                          Added
                        </Typography>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
