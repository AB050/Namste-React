import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import resList from "../Utilis/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  const [searchText,setsearchText] = useState();

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" onChange={
            (e)=>
            {
              const searchText = e.target.value;
            }
          }/>
          <button>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;