
// state is our initial state and action is what we want to do to it
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return { ...state, cart: []}
    } else if (action.type === "REMOVE") {
        // grab everything in state, then grab the cart but only where the id's don't match the id we passed in (action.payload is the items id)
        return { ...state, cart:state.cart.filter((item) => item.id !== action.payload)}
    } else if (action.type === "GET_TOTAL") {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, { total: 0, amount: 0 })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount}
    } else if (action.type === "LOADING") {
        return { ...state, loading: true}
    } else if (action.type === "DISPLAY_ITEMS") {
        return { ...state, cart: action.payload, loading: false}
    } else if (action.type === "TOGGLE_AMOUNT") {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id) {
                if(action.payload.type === "inc"){
                    return { ...cartItem, amount: cartItem.amount + 1}
                } else if (action.payload.type === "dec") {
                    return { ...cartItem, amount: cartItem.amount - 1}
                }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart}
    }
    return state
}

export default reducer