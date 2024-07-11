import RestaurantCard  from "./RestaurantCard";
import { useEffect, useState} from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [loading, setLoading] = useState(true);
  const isOnline = useOnlineStatus();

  // const {loggedInUser,setUserInfo}=useContext(UserContext)


  console.log(restaurantListData)

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const jsonData = await data.json();
      const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantListData(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOnline) {
    return <div className="text-center text-lg font-semibold mt-4 text-red-600">You are offline. Please check your internet connection.</div>;
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          name="search-box"
          className="w-full md:w-1/2 shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-md p-2 mb-2 md:mb-0"
          placeholder="Search for restaurants..."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <div className="flex space-x-2">
          <button
            id="search-btn"
            className="px-4 py-2 bg-white rounded-l-md font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              const filteredSearch = restaurantListData.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurant(filteredSearch);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-white rounded-r-md font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              const topRatedRestaurants = restaurantListData.filter((res) =>
                parseFloat(res.info.avgRating) > 4.3
              );
              setFilteredRestaurant(topRatedRestaurants);
            }}
          >
            Top Rated
          </button>
          {/* <div className="m-4 p-4 flex items-center">
            <label>Username : </label>
            <input
            className="border border-black p-2"
            value={loggedInUser} 
            onChange={(e)=>setUserInfo(e.target.value)}></input>
          </div> */}
        </div>
      </div>
      <div className="flex m-4 p-4 flex-wrap justify-evenly bg-gradient-to-r from-blue-500 to-purple-600 shadow-sm rounded-lg">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
