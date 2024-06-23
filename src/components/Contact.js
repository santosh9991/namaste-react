const Contact = ()=>{
    return (
    <div className="">
        <h3 className="font-bold m-2 p-2">Contact Us page</h3>
        <form >
            <input type='text' className="border border-black p-2 m-2 rounded-lg" placeholder="name"></input>
            <input type='text' className="border border-black p-2 m-2 rounded-lg" placeholder="message"></input>
            <button className="bg-slate-500 rounded-lg text-white p-2 m-2">Submit</button>
        </form>
        
    </div>
    
    )
}

export default Contact;