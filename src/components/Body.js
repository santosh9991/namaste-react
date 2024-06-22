
import { useContext, useEffect, useState } from "react";
import RestaruntCard, { withPramotedLabel } from "../components/RestaruntCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestraurent, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const {setUserName } = useContext(UserContext)
    const RestaruntCardPramoted = withPramotedLabel()
    const handleSearch = () =>{
      const updatedList = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>4.1)
      setListOfRestaurants(updatedList)
    }
    const handleUserName = (e) =>{
      setUserName(e.target.value)
    }
    //fetch the data
    const fetchData = async () =>{
      const data =  await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await data.json();  
      console.log('josn', json.data);
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
        <div className="filter flex">
            <div className="search m-4 p-4">
              <input type="text" className="border border-solid border-black" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
              <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                console.log(searchText)
                const filteredRestraurents = listOfRestaurants.filter(
                  (res)=>{
                    
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    // console.log('check---',res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  })
                  setFilteredRestaurant(filteredRestraurents)
                  }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={handleSearch}>
          Top Rated Restarunt
            </button>
          </div>
          <div className="m-4 flex items-center">
            <label>userName: </label>
            <input className="border border-black m-4" onChange={handleUserName}/>
          </div>
        </div>
        
        <div className="flex flex-wrap">
          {filteredRestraurent.map((restaurant) => (
            <Link to={'/restaurants/'+restaurant.info.id} key={restaurant.info.id}>
               <RestaruntCard resData={restaurant.info} />
              </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;