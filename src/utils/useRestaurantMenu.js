import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchResMenuData()
    },[])
    const fetchResMenuData = async ()=>{
        const url = MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER"
        console.log('url----->', url, resId); 
        const data = await fetch(url);
        const json = await data.json();
        setResInfo(json.data);
        console.log('res menu data', json);
    }

    return resInfo
}

export default useRestaurantMenu