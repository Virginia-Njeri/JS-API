// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
// ;
const productApi = axios.create({
    baseURL:"http://localhost:5000/"
})
        
export var product_list = async ()=>{
    const response = await productApi.get("/products")
    return response.data

 }


export var fruit_list = async ()=>{
    const response = await productApi.get("/products/fruits")
    return response.data

}

export var vegetable_list = async()=>{
    const response = await productApi.get("/products/vegetables")
    return response.data

}



