import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Material UI
import { ThemeProvider } from "@material-ui/core/styles";
// css
import "./App.css";
import "./assets/css/utilities.css";
//layout
import Header from "./layout/Header";
//Pages
import Home from "./pages/index";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import PageNotFound from "./pages/pageNotFound";
import ShoeDetail from "./template/ShoeDetail";

//theme
import { theme } from "./theme";
//context
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/shop/:slug" element={<ShoeDetail />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </GlobalContextProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
