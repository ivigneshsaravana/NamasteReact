import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    // Local State Variable - Super Powerfull Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.314802421188112&lng=76.60672657191753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                        );
                    setListOfRestaurants(filteredList);
                }

                }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map( (restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body;