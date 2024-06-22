import { CDN_URL } from "../utils/constants";

const RestaruntCard = (props) => {
    const { resData } = props;
    const {
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
      cloudinaryImageId,
    } = resData;
    return (
      <div className="m-4 p-4 w-[200px] bg-gray-50 rounded-lg hover:bg-gray-100">
        <img
          className="rounded-lg"
          src={`${CDN_URL}${cloudinaryImageId}`}
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export const withPramotedLabel = (RestaruntCard)=>{
    return (props)=>{
      <div>
        <label>Pramoted </label>
        <RestaruntCard {...props}/>
      </div>
    }
  }

  export default RestaruntCard;