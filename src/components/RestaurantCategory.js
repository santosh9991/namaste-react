import ItemList from "./ItemList";

const RestaruntCategory = ({data})=>{
    console.log('data', data);
    return (
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-4  shadow-lg">
                <div className="flex justify-between">
                <span>{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                <div>
                    <ItemList items={data.itemCards}/>
                </div>
            </div>
        </div>
    )
}
export default RestaruntCategory;