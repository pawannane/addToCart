export const ADD = (item) => {
    return{
        type: "ADD_CART",
        payload: item
    }
}

// REMOVE ITEMS 
export const DLT = (id) => {
    return{
        type: "RMV_CART",
        payload: id
    }
}