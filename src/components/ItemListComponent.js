const ItemListComponent = ({items,dummy})=>{

    
    return(
           <div>
            {items.map((e)=>(
                
                <div key={e.item.id}  className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between" >
                    <div  className="w-9/12" >
                 <div className="py-2">
                    {/* show item name */}
                        <span >{e.item.name}</span>
                        {/* to show item price, if price is not there show default price */}
                        <span> - ₹ {e.item.price!==0 ? e.item.price : e.item.default_price }</span>

                        </div>
                        {/* to show item description */}
                    <p className="text-xs" >{e.item.desc}</p>
                     </div>

                     {/* if Image not there for particular item we will not show image for that,
                      so we write condition here  so that if image not available we will display add Button for that.*/}
                      {e.item.item_image_url!==undefined ? 
                         <div className="w-3/12 p-4">
                      <div className="absolute" >   <button className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg" > Add +</button></div>
                      <div>  <img src={e.item.item_image_url} className="w-full"/></div>
                      </div>
                      : <div className="w-3/12 p-4"> </div>
                    } </div>
    
    ))}
     </div>
    );
};

export default ItemListComponent;