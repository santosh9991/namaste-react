import ItemList from "./ItemList";

const RestaruntCategory = ({data, showItems, setShowIndex})=>{
    const handleCategory = ()=>{
        setShowIndex()
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-4  shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleCategory}>
                <span className="m-2">{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                <div>
                   {showItems && <ItemList items={data.itemCards}/> }
                </div>
            </div>
        </div>
    )
}
export default RestaruntCategory;