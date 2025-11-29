import { useSelector } from "react-redux";
import ItemListComponent from "./ItemListComponent";
import { use } from "react";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const  CartComponent =()=>{

   //Subscribe to the redux store using useSelector hook.
   //so that we can access the redux store state inside the component.
   //to show item present inside the cart in CartComponent.

   const cartItems= useSelector((store)=> store.cart.items);
   console.log(cartItems);


//     const store= useSelector((store)=> store);
//    const cartItems= store.cart.items;
//    console.log(cartItems);
   


   //get the dispatch function from react-redux library.  
   const dispatch = useDispatch();

   
const handleClearCart=()=>{
    //dispatch an action to clear the cart
    dispatch(clearCart());
};

    return(
        <div className=" text-center m-4 p-4" >
            <h1 className=" text-2xl font-bold" >Cart</h1>
              <div className=" w-6/12 m-auto">
              <button className="p-2 m-2 bg-black text-white rounded-lg" 
                onClick={
                    handleClearCart
                }
              >Clear Cart</button>
               {/* if cart is empty show message */}
               {cartItems.length===0  && (<h1>Your Cart is Empty add ietms to teh cart</h1>)}
                <ItemListComponent items={cartItems} />

              </div>

        </div>
    );
}

export default CartComponent;