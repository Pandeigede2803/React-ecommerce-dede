import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';
import Login from './pages/Login';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <div className="content">
          {/* Place the Routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
