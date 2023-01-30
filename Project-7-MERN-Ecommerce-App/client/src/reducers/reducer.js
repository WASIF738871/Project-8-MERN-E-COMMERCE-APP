const products = []
const getProductReducer = (state={products},action) => {
    switch(action.type){
        case "SUCCESS_GET_PRODUCT":
            return action.payload;
        case "FAIL_GET_PRODUCT":
            return action.payload;
        default:
            return state;
    }
}

export default getProductReducer;