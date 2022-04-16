import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/providers/AuthProvider";
import { ProductProvider } from "./contexts/providers/ProductProvider";
import { FiltersProvider } from "./contexts/providers/FiltersProvider";
import { CartProvider } from "./contexts/providers/CartProvider";
import { WishlistProvider } from "./contexts/providers/WishlistProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <FiltersProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </FiltersProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
