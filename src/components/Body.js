
import RestaruntCard from "../components/RestaruntCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaruntCard resData={restaurant.info} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;