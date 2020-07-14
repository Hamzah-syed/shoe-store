import React, { useContext } from "react";
import { useParams } from "react-router-dom";
//materi ui
import { Grid, Button, Box } from "@material-ui/core";
// import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
//Context
import { ShoeDataContext } from "../context/GlobalContext";
//image
import DotsBg from "../assets/images/DotsBg.png";
const useStyle = makeStyles((theme) => ({
  image: {
    transform: "rotate(-45deg) translateX(-90px) translateY(-40px)",
    height: "450px",
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(-45deg) translateX(-80px) translateY(-20px)",
      width: "300px",
      height: "300px",
    },
  },

  fluid: {
    width: "450px",
    height: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "300px",
    },
  },
  bgDots: {
    position: "absolute",
    width: "40%",
    height: "90%",
    left: -20,
    top: -20,
    [theme.breakpoints.up("xs")]: {
      height: "60%",
      left: -50,
      top: 0,
    },
    [theme.breakpoints.up("sm")]: {
      height: "80%",
      left: -80,
      top: -30,
    },
    [theme.breakpoints.up("md")]: {
      left: -100,
      top: -30,
    },
    [theme.breakpoints.up("lg")]: {
      left: -70,
      top: -30,
    },
  },
}));

const ShoeDetail = () => {
  const { shoes, addToCart, cartItems } = useContext(ShoeDataContext);
  const classes = useStyle();
  const { slug } = useParams();

  let check;

  const shoeData = shoes.filter((shoe) => shoe.slug === slug);

  return (
    <div className="container mx-auto px-2">
      <div
        className=" h-20 w-full absolute left-0"
        style={{ background: "#C70039" }}
      ></div>
      {shoeData.map((shoe) => (
        <Grid key={shoe.id} container className="h-screen" spacing={1}>
          <Grid item lg={6} container alignContent="center">
            <div className="w-full h-full flex flex-col justify-center lg:mt-0 mt-16">
              <Box mb={3} className="relative">
                <img src={DotsBg} alt="dots" className={classes.bgDots} />
                <h1 className="text-3xl font-bold py-5">{shoe.shoeName}</h1>
                <h1 className="text-lg pb-3 text-gray-700">
                  {shoe.description}
                </h1>
                <h1 className="text-lg text-gray-700">
                  <b>Price: {shoe.price}$</b>
                </h1>
              </Box>

              {/* getting value in bolean */}
              {(check = cartItems.every((item) => item.id !== shoe.id))}
              <Button
                onClick={() => addToCart(shoe.id)}
                variant="contained"
                color="primary"
                className="focus:outline-none"
                style={{ width: "140px" }}
                disabled={check ? false : true}
              >
                {/* checking true or false */}
                {check ? "Add To Cart" : "Added"}
              </Button>
            </div>
          </Grid>
          <Grid item lg={6} container alignItems="center" justify="center">
            <div className="w-full flex justify-center relative  ">
              <div className="w-full h-full absolute flex justify-center  top-0">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.fluid}
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#C70039"
                    d="M43.6,-75.5C57.6,-67.5,70.8,-58,79.6,-45.1C88.3,-32.3,92.7,-16.2,92.9,0.1C93,16.3,88.9,32.6,80.2,45.6C71.5,58.6,58.3,68.3,44.1,76.5C30,84.7,15,91.4,-0.1,91.6C-15.3,91.9,-30.6,85.7,-44.4,77.3C-58.2,68.9,-70.6,58.4,-78.1,45.2C-85.7,31.9,-88.5,16,-87.8,0.4C-87.1,-15.1,-82.9,-30.3,-75,-43.1C-67.2,-55.8,-55.8,-66.3,-42.6,-74.8C-29.5,-83.4,-14.8,-90.1,0,-90.1C14.8,-90.1,29.6,-83.5,43.6,-75.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <img src={shoe.image} alt="shoe" className={classes.image} />
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ShoeDetail;
