
export const getData = ()=>async (dispatch) => {
    try {
        const data = await fetch("/product/api1/getProduct", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await data.json();
        console.log(res.allProducts);
        dispatch({
            type: "SUCCESS_GET_PRODUCT",
            payload: res.allProducts
        })

    } catch (error) {
        dispatch({
            type: "FAIL_GET_PRODUCT",
            payload: error.message
        })
    }
}
