import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";

import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<Home />} /> {/*Redireciona para Home se a página não existir*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
