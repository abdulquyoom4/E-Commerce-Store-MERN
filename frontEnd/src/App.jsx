import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import OrderForm from './components/OrderForm'
import Menu from './pages/Menu'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import AdminNavbar from './pages/Admin/AdminNavbar'
import Messages from './pages/Admin/Messages'
import ManageMenu from './pages/Admin/ManageMenu'
import Orders from './pages/Admin/Orders' 

const App = () => {
  const routes = createBrowserRouter(
    [
      {path: '/', element: <><Navbar/><Banner/><Footer/></>},
      {path: '/menu', element: <><Navbar /><Menu /><Footer/></>},
      {path: '/orderform', element: <><Navbar /><OrderForm /><Footer/></>},
      {path: '/aboutus', element: <><Navbar /><AboutUs /><Footer/></>},
      {path: '/contact', element: <><Navbar /><Contact /><Footer/></>},
      {path: '/login', element: <><Navbar /><Login /><Footer/></>},
      {path: '/signup', element: <><Navbar /><SignUp /><Footer/></>},
      {path: '/admin', element: <AdminNavbar />},
      {path: '/admin/messages', element: <><AdminNavbar /><Messages /></> },
      {path: '/admin/menu', element: <><AdminNavbar /><ManageMenu /></> },
      {path: '/admin/orders', element: <><AdminNavbar /><Orders /></> }
    ]
  )
  return (
   <>
    <div>
      <RouterProvider router={routes} />
    </div>
   </>
  )
}

export default App
