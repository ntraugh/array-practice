
// state is our initial state and action is what we want to do to it
const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return { ...state, cart: []}
    }
    return state
}

export default reducer