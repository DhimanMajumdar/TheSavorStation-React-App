import { IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(null); // Expand panel state variable

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRatingString, cuisines, id, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
    const updateActiveIndex = (newIndex) => {
      // updated - opening and closing same accordion functionality.
      if (newIndex === showIndex) {
        setShowIndex(null);
      } else {
        setShowIndex(newIndex);
      }
    };
  

  const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="m-20">
      <div className="flex m-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-black shadow-lg">
        <div>
          <img
            className="w-42 h-52 "
            id="res-image"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="m-4 p-4">
          <h1 className="text-5xl font-extrabold py-2">{name}</h1>
          <p className="text-xl font-semibold">{costForTwoMessage}</p>
          <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
          <p>{avgRatingString}</p>
        </div>
      </div>

      {categories.map((category, index) => {
        return (
          <RestaurantCategories
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItem={index === showIndex}
            updateIndex={() => updateActiveIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;