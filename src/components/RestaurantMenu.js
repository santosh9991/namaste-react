import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaruntCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log('resInfo', resInfo.cards[4])
  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(
    "itemCards",
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  );
  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log('categories', categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <p>{costForTwoMessage}</p>
      {categories.map((category, index) => (
        //constrolled component
        <RestaruntCategory
          key = {category?.card?.card?.title}
          data={category.card.card}
          showItems={index ===showIndex? true: false}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
      {/* <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} {': Rs'}
                {item.card.info.price || item.card.info.defaultPrice}</li>)}
            </ul> */}
    </div>
  );
};
export default RestaurantMenu;
