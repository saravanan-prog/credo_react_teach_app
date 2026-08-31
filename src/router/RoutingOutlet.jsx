import { BrowserRouter, Routes, Route } from "react-router";
import Header from "../core/resusble-components/Header";
import Homepage from "../Pages/home/Homepage";
import Aboutpage from "../Pages/about/Aboutpage";
import BlogPage from "../Pages/blog/BlogPage";
import ContactPage from "../Pages/contact/ContactPage";
import PageNotFound from "../Pages/pagenotFound/PageNotFound";
import Products from "../Pages/products/Products";
import ViewDetails from "../Pages/products/ViewDetails";
import CustomerList from "../Pages/customers/CustomersList";
import Viewcustomerdetails from "../Pages/customers/Viewcustomerdetails";

export default function RoutingOutlet() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<CustomerList />} />
           <Route path="customers/viewcustomer" element={<Viewcustomerdetails />} />


          <Route path="products/viewdetails/:id" element={<ViewDetails />} />
          <Route path="products/viewdetails/:name" element={<ViewDetails />} />
          <Route path="products/viewdetails/:id /:name" element={<ViewDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
