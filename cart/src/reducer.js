
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
    }
    return state
}

export default reducer