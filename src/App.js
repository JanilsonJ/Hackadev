import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { CartProvider } from "./Context/cart";

function App() {
  return (
    <Router>

      <CartProvider>
        <Navbar />
        
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/checkout" element={<Checkout />} />

          {/*Redireciona para Home se a página não existir*/}
          <Route exact path="*" element={<Home />} />{" "}
        </Routes>

        <Footer />
      </CartProvider>

    </Router>
  )
}

export default App