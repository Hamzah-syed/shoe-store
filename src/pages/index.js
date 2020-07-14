import React from "react";
import { Link } from "react-router-dom";
//material Ui
import { Typography, Grid, Box, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//css
import "../assets/css/home.css";
//image
import shoeImage from "../assets/images/homeShoe.png";
import DotsBg from "../assets/images/DotsBg.png";

const myStyle = makeStyles((theme) => ({
  laningText: {
    fontWeight: 600,
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
    [theme.breakpoints.up("xs")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "70px",
    },
  },
  bgDots: {
    position: "absolute",
    width: "70%",
    height: "70%",
    left: -20,
    top: -20,
    [theme.breakpoints.up("xs")]: {
      left: -50,
      top: -20,
    },
    [theme.breakpoints.up("sm")]: {
      left: -80,
      top: -30,
    },
    [theme.breakpoints.up("md")]: {
      left: -100,
      top: -30,
    },
    [theme.breakpoints.up("lg")]: {
      left: -100,
      top: -50,
    },
  },
  LandingDesign: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -2,

    [theme.breakpoints.down("md")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
    },
  },

  NikeBg: {
    fontWeight: 900,
    opacity: 0.1,
    position: "absolute",
    zIndex: -1,
    marginTop: "20px",
    fontSize: "250px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "150px",
    },
  },

  imagediv: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  shoeImg: {
    [theme.breakpoints.up("sm")]: {
      width: "500px",
      height: "440px",
    },
    [theme.breakpoints.up("md")]: {
      width: "430px",
      height: "370px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "530px",
      height: "470px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "600px",
      height: "540px",
    },
  },
}));

const index = () => {
  const classes = myStyle();
  return (
    <>
      <div>
        <Hidden mdUp>
          <div
            className="h-20 w-full absolute top-0 left-0"
            style={{ background: "#c70039", zIndex: 2 }}
          ></div>
        </Hidden>
        <Grid container className="h-screen">
          <Grid
            item
            md={6}
            xs={12}
            container
            alignItems="center"
            className="container"
          >
            <Box className="relative w-full h-full flex items-center justify-center mx-auto md:my-0 sm:my-12 my-4">
              <div className="p-5  relative sm:pt-0 pt-12">
                <img src={DotsBg} alt="dots" className={classes.bgDots} />

                <Typography className={classes.laningText}>ONE SHOE</Typography>
                <Typography className={classes.laningText}>
                  CAN CHANGE
                </Typography>
                <Typography
                  gutterBottom
                  className={classes.laningText}
                  color="primary"
                >
                  YOUR LIFE
                </Typography>
                <Link to="/shop">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className=" focus:outline-none  "
                    style={{ marginLeft: 10, marginTop: 2 }}
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            container
            justify="center"
            alignItems="center"
            className={`relative`}
          >
            <div className={` HomeLand ${classes.LandingDesign}`}>
              {/* Nike in background */}
              <div className="w-full h-full flex justify-center absolute overflow-x-hidden">
                <Typography className={classes.NikeBg}>NIKE</Typography>
              </div>
            </div>
            <div
              className={`flex items-center  h-full w-full py-2 ${classes.imagediv}`}
            >
              <img
                src={shoeImage}
                alt="shoe"
                width="70%"
                height="70%"
                className={classes.shoeImg}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default index;
