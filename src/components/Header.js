import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constant';
import { useContext, useEffect, useState } from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)

  // Selector => Suscribing to the Store

  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)

  useEffect(() => {
    // Effect for btnNameReact update
  }, [btnNameReact]);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-3 px-5">
        <Link to="/" className="flex items-center space-x-2">
          <img src={LOGO_URL} alt="App Logo" className="w-12 h-12 rounded-full" />
          <span className="text-2xl font-bold">The SavorStation</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/" className="px-2 hover:underline">Home</Link></li>
          <li><Link to="/about" className="px-2 hover:underline">About</Link></li>
          <li><Link to="/contact" className=" px-2 hover:underline">Contact Us</Link></li>
          <li><Link to="/grocery" className=" px-2 hover:underline">Grocery</Link></li>
          <li><Link to="/cart" className="px-2 hover:underline text-2xl">Cart - ({cartItems.length} items)</Link></li>
          <button
            onClick={() => setBtnNameReact(btnNameReact === 'Login' ? 'Logout' : 'Login')}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              btnNameReact === 'Login' ? 'bg-green-400 hover:bg-green-500' : 'bg-red-400 hover:bg-red-500'
            }`}
          >
            {btnNameReact}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
