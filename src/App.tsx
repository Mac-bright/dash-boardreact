import Home from "./pages/home/Home"
import './styles/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/menu";
import Login from "./pages/login/Login";

function App() {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar/>

          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>

        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/Users',
          element:<Users/>
        },
        {
          path:'/Products',
          element:<Products/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
