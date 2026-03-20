import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import { Shop } from './pages/Shop.jsx'
import { ProductDetailPage } from './pages/ProductDetailPage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import { Wishlist } from './pages/Wishlist.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogDetails from './pages/BlogDetail.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import ReturnRefundPolicy from './pages/ReturnPolicy.jsx'
import ShippingPolicy from './pages/ShippingPolicy.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:productName",
        element: <ProductDetailPage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails/>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions/>,
      },
      {
        path: "/return-policy",
        element: <ReturnRefundPolicy/>,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy/>,
      },
      

      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
