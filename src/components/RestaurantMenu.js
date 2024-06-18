import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo===null) return <Shimmer/>
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    // console.log('resInfo', resInfo.cards[4])
    const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log('itemCards', itemCards);
    return (resInfo === null?<Shimmer/>:
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} {': Rs'}
                {item.card.info.price || item.card.info.defaultPrice}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;