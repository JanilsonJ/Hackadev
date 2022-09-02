import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginRegister from "./Pages/LoginRegister";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { CartProvider } from "./Context/cart";
import { UserProvider } from "./Context/user";

function App() {
  return (
    <Router>

      <UserProvider>
        <CartProvider>
          <Navbar />
          
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<LoginRegister />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/checkout" element={<Checkout />} />

            <Route exact path="/home/:filter" element={<Home />} />

            {/*Redireciona para Home se a página não existir*/}
            <Route exact path="*" element={<Home />} />
          </Routes>

          <Footer />
        </CartProvider>
      </UserProvider>

    </Router>
  )
}

export default App