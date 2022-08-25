
// state is our initial state and action is what we want to do to it
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return { ...state, cart: []}
    } else if (action.type === "REMOVE") {
        // grab everything in state, then grab the cart but only where the id's don't match the id we passed in (action.payload is the items id)
        return { ...state, cart:state.cart.filter((item) => item.id !== action.payload)}
    }
    return state
}

export default reducer