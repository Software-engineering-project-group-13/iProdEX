import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Product from "./pages/Product";

import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import NEVerification from "./pages/NEVerification";
import Favorites from "./pages/Buyer/Favorites";
import AddProducts from "./pages/Seller/AddProduct";
import SellerItems from "./pages/Seller/ProductsPage";
import { useSelector } from "react-redux";
import ConfirmBuy from "./pages/Buyer/ConfirmBuy";
import SearchResults from "./pages/Buyer/SearchResults";
import ProductDetailsPage from "./pages/Seller/ProductDetailsPage";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/editprofile/:userId" element={<EditProfile />} />
      <Route path="/product/:id" element={<Product />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/neverification" element={<NEVerification />} />
      <Route path="/favorites/:userId" element={<Favorites />} />
      <Route path="/addproducts/:userId" element={<AddProducts />} />
      <Route path="/searchresults/:category" element={<SearchResults />} />
      <Route path="/sellerproduct/:id" element={<ProductDetailsPage />} />
      <Route path="/selleritems/:userId" element={<SellerItems />} />
      <Route path="/confirmBuy" element={<ConfirmBuy />} />
    </Routes>
  );
};

export default App;
