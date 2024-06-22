import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearItem } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((state)=>state.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearItem())
    }
    return(
        <div className="text-center my-4">
            <h1 className="text-2xl font-bold">Cart List</h1>
           <div className="w-6/12 m-auto">
           <button className="border border-white bg-black text-white p-2 m-2 rounded-lg" onClick={handleClearCart}>clear Cart</button>
           {cartItems.length === 0 && <h1> Cart Empty. Please add items to the cart</h1>}
           <ItemList items={cartItems}/>
           </div>
        </div>
    )
}
export default Cart