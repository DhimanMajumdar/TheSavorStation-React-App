// Individual Category (Header - Item Panel)
import ItemList from "./itemList";

const RestaurantCategories = ({ data, showItem, updateIndex}) => {
  console.log(showItem);

  const handleShowItems = () => {
    updateIndex(); //setShowIndex
  };
  return (
    <div className="w-6/12 mx-auto text-center my-3 p-4 border-b-8 shadow-lg bg-gradient-to-r from-blue-200 to-purple-400 hover:border-blue-600">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleShowItems} //triggers event that calls handleShowItems
      >
        <span className="text-xl font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>{showItem ? "⬆️" : "⬇️"}</span>
      </div>

      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;