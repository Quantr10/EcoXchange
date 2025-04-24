import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Contact, Cart, Admin, OrderHistory, Login, Register, Reset} from "./pages";
import { Header, Footer } from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/register" element={<Register/>} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
