export const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": // Use the same case as your dispatch action
        return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_FROM_CART":
        console.log(action.payload.id)
        return{...state,Cart:state.Cart.filter((prod)=>prod.id!==action.payload.id)}
      default:
        return state;
    }
  };
  