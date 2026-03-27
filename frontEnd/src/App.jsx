import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import OrderForm from './components/OrderForm'
import Menu from './pages/Menu'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import AdminNavbar from './pages/Admin/AdminNavbar'
import Messages from './pages/Admin/Messages'
import ManageMenu from './pages/Admin/ManageMenu'
import Orders from './pages/Admin/Orders' 

const App = () => {
  const routes = createBrowserRouter(
    [
      {path: '/', element: <><Navbar/><Banner/></>},
      {path: '/menu', element: <><Navbar /><Menu /></>},
      {path: '/orderform', element: <><Navbar /><OrderForm /></>},
      {path: '/contact', element: <><Navbar /><Contact /></>},
      {path: '/login', element: <><Navbar /><Login /></>},
      {path: '/signup', element: <><Navbar /><SignUp /></>},
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
