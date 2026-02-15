import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import menu from '../assets/menu.svg'

const Navbar = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

     const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
   <>
      <div className='navbar flex justify-around mt-3 items-center'>
                <div className="menuicon md:hidden ">
                    <img src={menu} alt="menuicon" />
                </div>
               <div className="loginbtn">
                  {
                     !isLoggedIn ? (<NavLink to='/login' className='bg-yellow-600 px-3 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent cursor-pointer text-center'>Login</NavLink>) :
                     (<button onClick={handleLogout} className='bg-yellow-600 px-3 py-1 rounded-lg font-bold hover:text-yellow-500 hover:bg-transparent cursor-pointer text-center'>Logout</button>)
                  }
               
               </div>
            <div className="links hidden md:block">
               <ul className='flex justify-center space-x-7 text-lg font-semibold'>
                <li><NavLink to='/' className={(e)=> e.isActive? "text-yellow-500" : ""} >Home</NavLink></li>
                <li><NavLink to='/menu' className={(e)=> e.isActive? "text-yellow-500" : ""}>Menu</NavLink></li>
                <li><NavLink to='/contact' className={(e)=> e.isActive? "text-yellow-500" : ""}>Contact</NavLink></li> 
                <li><NavLink to='/aboutus' className={(e)=> e.isActive? "text-yellow-500" : ""}>About Us</NavLink></li>
               </ul>
            </div>
            <div className="logo">
               <h2 className='font-urdu font-bold text-yellow-500 text-2xl'>سنابل سویٹس</h2>
            </div> 
      </div>
   </>
  )
}

export default Navbar
