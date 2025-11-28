import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart', // Name of the slice
    initialState:{
        items:[] // Initial state of the cart
    },
    reducers:{  
        //reducers object contains multiple actions. 
        //for Each action we define a  reducer function. 
        //addItem is action creator
        //so, addItem is an reducer function whose name is addItem action.
        addItem: (state , action)=>{
            console.log(state); //Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: undefined, …}
            console.log(action);  //{type: 'cart/addItem', payload: 'pizza'}
             //mutating the state directly because immer library is used internally by redux toolkit.
             //i.e. modifying original state is allowed in redux toolkit.
             //Redux toolkit used immer behind the state.
           state.items.push(action.payload); // Add item to cart
            /*
            */

            // //Vanilla redux way to update the state immutably
            // const newState=[...state];
            //  newState.items.push(action.payload);
            //  return newState;

        },
        // removeItem is action creator
        removeItem: (state,action)=>{
            // Logic to remove item from cart
            state.items.pop(); // Remove last item from cart
        },
        // clearCart is action creator
        clearCart: (state,action)=>{
                //    state.items.length=0; // Clear all items from cart so no need of action.payload
                   //state=[];  not working bcz here we are not modifying the state, we are just adding refrence of it.

                //    console.log(state); //we get proxy object of reduc
                //     console.log(current(state)); //to print object of redux
                //    state=[];
                //    console.log(state);
                return {items:[]};
         
        }
    }
});
/*
O/P=>
    cartSlice is an object with following properties:
{
  actions: {},
  reducer:
  }
*/
// Exporting action creators
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// Exporting  reducer.
export default cartSlice.reducer;