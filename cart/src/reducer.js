
// state is our initial state and action is what we want to do to it
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return { ...state, cart: []}
    } else if (action.type === "REMOVE") {
        // grab everything in state, then grab the cart but only where the id's don't match the id we passed in (action.payload is the items id)
        return { ...state, cart:state.cart.filter((item) => item.id !== action.payload)}
    } else if (action.type === "INCREASE") {
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload) {
                // if the item id matches the payload id we passed in then we copy the whole item again and change it's amount by adding 1 
                return { ...item, amount: item.amount + 1}
            }
            return item
        })
        return { ...state, cart: tempCart}
    } else if (action.type === "DECREASE") {
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload) {
                return { ...item, amount: item.amount - 1}
            }
            return item
        }).filter((cartItem) => cartItem.amount !== 0 )
        return {...state, cart: tempCart}
    }
    return state
}

export default reducer