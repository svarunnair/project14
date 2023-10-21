import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const POST_CART_REQUIEST="POST_CART_REQUIEST"
export const POST_CART_SUCCESS="POST_CART_SUCCESS"
export const POST_CART_FAILURE="POST_CART_FAILURE"

export const GET_CART_REQUIEST="GET_CART_REQUIEST"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILURE="GET_CART_FAILURE"

export const PATCH_CART_REQUIEST="PATCH_CART_REQUIEST"
export const PATCH_CART_SUCCESS="PATCH_CART_SUCCESS"
export const PATCH_CART_FAILURE="PATCH_CART_FAILURE"

export const DELETE_CART_REQUIEST="DELETE_CART_REQUIEST"
export const DELETE_CART_SUCCESS="DELETE_CART_SUCCESS"
export const DELETE_CART_FAILURE="DELETE_CART_FAILURE"

export const POST_PAYMENT_REQUIEST="POST_PAYMENT_REQUIEST"
export const POST_PAYMENT_SUCCESS="POST_PAYMENT_SUCCESS"
export const POST_PAYMENT_FAILURE="POST_PAYMENT_FAILURE"

export const GET_PAYMENT_REQUIEST="GET_PAYMENT_REQUIEST"
export const GET_PAYMENT_SUCCESS="GET_PAYMENT_SUCCESS"
export const GET_PAYMENT_FAILURE="GET_PAYMENT_FAILURE"


const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}


const postCartRequiest=()=>{
    return({
        type:POST_CART_REQUIEST
    })
}
const postCartSuccess=(data)=>{
    return({
        type:POST_CART_SUCCESS,
        payload:data
    })
}
const postCartFailure=()=>{
    return({
        type:POST_CART_FAILURE
    })
}

const getCartRequiest=()=>{
    return({
        type:GET_CART_REQUIEST
    })
}
const getCartSuccess=(data)=>{
    return({
        type:GET_CART_SUCCESS,
        payload:data
    })
}
const getCartFailure=()=>{
    return({
        type:GET_CART_FAILURE
    })
}

const patchCartRequiest=()=>{
    return({
        type:PATCH_CART_REQUIEST
    })
}
const patchCartSuccess=(data)=>{
    return({
        type:PATCH_CART_SUCCESS,
        payload:data
    })
}
const patchCartFailure=()=>{
    return({
        type:PATCH_CART_FAILURE
    })
}

const deletecartRequiest=()=>{
    return({
        type:DELETE_CART_REQUIEST
    })
}
const deletecartSuccess=(data)=>{
    return({
        type:DELETE_CART_SUCCESS,
        payload:data
    })
}
const deletecartFailure=()=>{
    return({
        type:DELETE_CART_FAILURE
    })
}


const postPaymentRequiest=()=>{
    return({
        type:POST_PAYMENT_REQUIEST
    })
}
const postPaymentSuccess=(data)=>{
    return({
        type:POST_PAYMENT_SUCCESS,
        payload:data
    })
}
const postPaymentFailure=()=>{
    return({
        type:POST_PAYMENT_FAILURE
    })
}

const getPaymentRequiest=()=>{
    return({
        type:GET_PAYMENT_REQUIEST
    })
}
const getPaymentSuccess=(data)=>{
    return({
        type:GET_PAYMENT_SUCCESS,
        payload:data
    })
}
const getPaymentFailure=()=>{
    return({
        type:GET_PAYMENT_FAILURE
    })
}




export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })
}

export const postCart=(item)=>(dispatch)=>{
   
    dispatch(postCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"POST",
        data:item
        
    })
    .then((res)=>{
        dispatch(postCartSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(postCartFailure())
    })
}

export const getCart=()=>(dispatch)=>{
    dispatch(getCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getCartSuccess(res.data))
        console.log("resdataa",res.data)
    })
    .catch((error)=>{
        dispatch(getCartFailure())
    })
}

export const patchCart=(id,data)=>(dispatch)=>{
    dispatch(patchCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchCartSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(patchCartFailure())
    })
}

export const deleteCart=(id)=>(dispatch)=>{
    dispatch(deletecartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"DELETE"
    })
    .then((res)=>{
        dispatch(deletecartSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(deletecartFailure())
    })
}

export const postPayment=(data)=>(dispatch)=>{
    console.log("datataa",data)
    
    dispatch(postPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postPaymentSuccess(res.data))
        console.log("resdataPymt",res.data)
    })
    .catch((error)=>{
        dispatch(postPaymentFailure())
    })
}

export const getPayment=()=>(dispatch)=>{
    dispatch(getPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getPaymentSuccess(res.data))
        console.log("getPyy",res.data)
    })
    .catch((error)=>{
        dispatch(getPaymentFailure())
    })
}

