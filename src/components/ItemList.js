import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{
    // console.log('item data', items);
    const dispatch = useDispatch();
    const handleClick = (item)=>{
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item)=>(
                <div
                key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
                >   
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="m-3/12"> 
                    <div className="absolute">
                        <button className="p-2 bg-black text-white shadow-lg m-auto mx-5 rounded-lg"
                        onClick={()=>handleClick(item)}>Add +</button>
                    </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-40"/>
                    </div>

                </div>

            ))}
        </div>
    )
}
export default ItemList;