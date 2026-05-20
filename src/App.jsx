import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import { useState } from "react";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing-page">
      {!showProductList ? (
        <>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>

          <AboutUs />
        </>
      ) : (
        <>
          <ProductList />
          <CartItem />
        </>
      )}
    </div>
  );
}

export default App;