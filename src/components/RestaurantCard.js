import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => {
  return (
    <Link
      to={"/restaurants/" + id}
      key={id}
    >
      <div className="m-2 p-4 bg-slate-200 w-60 rounded-xl min-h-96 flex flex-col items-center shadow-sm hover:scale-105 hover:bg-rose-300">
        <img
          className="rounded-xl w-48 h-48"
          src={IMG_URL + cloudinaryImageId}
          alt="food-img"
        />
        <div className="mt-4 w-48 h-44 items-start">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="mt-4">{cuisines.join(" ")}</p>
          <p className="mt-4">{avgRating} stars</p>
        </div>
      </div>
    </Link>
  );
};

// Higher Order Component

// Input - RestaurantCard  =>> RestaurantCardPromoted

// export const withPromotedLabel=(RestaurantCard)=>{
//   return(props)=>{
//     return(
//       <div>
//         <label className="absolute bg-black text-white m-2 p2 rounded-lg">Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;