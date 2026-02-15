import { NavLink } from "react-router-dom"

const AdminNavbar = () => {
  return (
   <>
    <div>
      <nav className='flex justify-around bg-black py-5 font-bold'>
        <h1>Admin Panel</h1>
       <ul className='flex justify-center gap-10'>
        
        <NavLink to='/admin/orders'><li>Orders</li></NavLink>
        <NavLink to='/admin/menu'><li>Menu</li></NavLink>
        <NavLink to='/admin/messages'><li>Messages</li></NavLink>
       </ul>
        <NavLink to='/login' className=''><button className='py-1 rounded-lg font-bold bg-transparent border cursor-pointer w-[100px]'>Back</button></NavLink>
      </nav>
      <main></main>
    </div>
   </>
  )
}

export default AdminNavbar
