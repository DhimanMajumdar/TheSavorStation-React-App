import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  
  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    // dispatch an action
    dispatch(addItem(item))

  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex text-left p-2 my-2 rounded-lg"
        >
          <div className="w-full p-4">
            <span className="text-xl font-semibold">{item.card.info.name}</span>
            <span className="block text-lg font-medium">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-black">{item.card.info.description}</p>
          </div>
          <div className="w-4/12 h-36 relative">
            <button className="px-2 w-full bg-green-200 rounded-lg absolute bottom-0 hover:shadow-lg font-semibold "
            onClick={()=>handleAddItem(item)}>
              Add ➕
            </button>
            <img
              className="w-full h-full object-cover rounded-lg hover:shadow-lg"
              src={IMG_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;