import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar"
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./context/cart";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  
  return (
   <CartProvider>
    <main>
        <Navbar setShowCart={setShowCart} />
        <MobileNavbar setShowCart={setShowCart} />
        <ProductList />
        <ProductDetails />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartProvider>
  );
};

export default App;