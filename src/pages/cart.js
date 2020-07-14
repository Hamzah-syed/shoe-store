import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoeDataContext } from "../context/GlobalContext";
import { Grid, IconButton, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//icons

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  primaryBg: {
    background: [theme.palette.primary.main],
  },
}));

const Cart = () => {
  const {
    cartItems,
    reduction,
    addition,
    removeProuct,
    total,
    totalAmount,
    clearCart,
  } = useContext(ShoeDataContext);

  React.useEffect(() => {
    totalAmount();
  }, [totalAmount]);
  //summary subtotal tax total
  const TAX_RATE = 0.07;
  let Tax = total * TAX_RATE;
  let GrandTotal = total - Tax;

  const classes = useStyles();

  return (
    <div className="container mx-auto flex justify-center pt-48  ">
      <div
        className="h-20 w-full absolute top-0 left-0"
        style={{ background: "#c70039", zIndex: 2 }}
      ></div>
      {cartItems.length ? (
        <Grid container spacing={1}>
          <Grid item container md={8}>
            <section className="text-gray-700 body-font w-full">
              <div className=" px-5  ">
                <div className=" w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap ">
                    <thead>
                      <tr>
                        <th
                          className={`px-4 py-3 title-font tracking-wider font-medium text-gray-100 text-sm  rounded-tl rounded-bl   ${classes.primaryBg}`}
                        >
                          Product
                        </th>
                        <th
                          className={`px-4 py-3 title-font tracking-wider font-medium text-gray-100  text-sm ${classes.primaryBg}`}
                        >
                          Quantity
                        </th>

                        <th
                          className={`px-4 py-3 title-font tracking-wider font-medium text-gray-100  text-sm ${classes.primaryBg}`}
                        >
                          Price
                        </th>
                        <th
                          className={`w-10 title-font tracking-wider font-medium text-gray-100  text-sm  rounded-tr rounded-br ${classes.primaryBg}`}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="bg-gray-100 border-solid border-b-2 border-gray-200 "
                        >
                          <td className="px-4 py-3">{item.shoeName}</td>
                          <td className="px-4 py-3">
                            {item.count === 1 ? (
                              ""
                            ) : (
                              <IconButton
                                onClick={() => reduction(item.id)}
                                className="focus:outline-none"
                                size="small"
                              >
                                <RemoveIcon fontSize="small" color="primary" />
                              </IconButton>
                            )}
                            {item.count}
                            <IconButton
                              onClick={() => addition(item.id)}
                              className="focus:outline-none bg-red-200"
                              size="small"
                            >
                              <AddIcon fontSize="small" color="primary" />
                            </IconButton>
                          </td>
                          <td className="px-4 py-3 text-lg text-gray-900">
                            {item.price * item.count}$
                          </td>
                          <td
                            onClick={() => removeProuct(item.id)}
                            className="px-4 py-3 text-lg text-gray-900"
                          >
                            <IconButton
                              color="primary"
                              onClick={() => addition(item.id)}
                              className="focus:outline-none"
                            >
                              <ClearIcon fontSize="small" />
                            </IconButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex pl-4 mt-4  w-full mx-auto">
                  <Link to="/shop">
                    <Typography color="primary" variant="subtitle2">
                      Go back{" "}
                      <ArrowForwardIosIcon
                        fontSize="small"
                        style={{ fontSize: "12px", marginTop: "-1px" }}
                      />
                    </Typography>
                  </Link>
                  <div className="flex ml-auto   rounded">
                    <Button
                      onClick={() => clearCart()}
                      className="focus:outline-none"
                      color="primary"
                      variant="contained"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="px-8 md:px-0 mt-10 md:mt-0   ">
              <div className="w-full pt-4 pb-8 px-6 shadow-lg  ">
                <h1 className="text-2xl font-semibold text-left pb-4">
                  Details
                </h1>
                {/* <hr className="pb-4" /> */}
                <span className="py-3 flex justify-between  border-solid border-b-2 border-pink-600 border-opacity-25">
                  <h1>Subtotal</h1>
                  <h1>{total}$</h1>
                </span>
                <span className="py-3 flex justify-between  border-solid border-b-2 border-pink-600 border-opacity-25">
                  <h1>Tax</h1>
                  <h1>{Tax.toFixed(2)}$ </h1>
                </span>
                <span className="py-3 flex justify-between  border-solid border-b-2 border-pink-600  border-opacity-25">
                  <h1>Total</h1>
                  <h1>{GrandTotal}$</h1>
                </span>
                <span className="pt-8 flex justify-end ">
                  <Button
                    className="focus:outline-none"
                    color="primary"
                    variant="contained"
                  >
                    Checkout
                  </Button>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      ) : (
        <div className="bg-pink-100 w-full px-4 py-20">
          {" "}
          <h1 className="text-center text-4xl text-gray-600">
            Cart is empty
          </h1>{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
