
import { useEffect, useState } from "react";
import RestaruntCard from "../components/RestaruntCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestraurent, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState('')
    const handleSearch = () =>{
      const updatedList = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>4.1)
      setListOfRestaurants(updatedList)
    }
    //fetch the data
    const fetchData = async () =>{
      const data =  await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await data.json();  
      console.log('josn', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    useEffect(()=>{
      fetchData();
      }
    ,[])
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
      return <h1>
        Looks like you are offine. Please check your internet connection.
      </h1>
    }
    return (
      listOfRestaurants.length ===0?<Shimmer/>:<div className="body">
        <div className="filter">
            <div className="search">
              <input type="text" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
              <button className="search-btn" onClick={()=>{
                console.log(searchText)
                const filteredRestraurents = listOfRestaurants.filter(
                  (res)=>{
                    
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    // console.log('check---',res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  })
                  setFilteredRestaurant(filteredRestraurents)
                  }}>Search</button>
            </div>
            <div className="filter-btn">
          <button onClick={handleSearch}>
          Top Rated Restarunt
            </button>
          </div>
        </div>
        
        <div className="res-container">
          {filteredRestraurent.map((restaurant) => (
            <Link to={'/restaurants/'+restaurant.info.id} key={restaurant.info.id}><RestaruntCard resData={restaurant.info} /></Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;