import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return <div className="m-4 p-4 text-center">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-6/12 m-auto bg-gradient-to-r from-blue-300 to-purple-500">
            <button className="m-2 p-4 text-center font-bold text-2xl bg-black text-white rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length===0 && <h1 className="font-bold m-4 p-4 bg-black text-red-600">Cart Empty ! Add items to the Cart</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
};

export default Cart;