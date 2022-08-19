const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
;
        
var product_list = function products(){

    fetch('localhost:5000/products')
.then((response)=>response.json())
.then((products_data)=>products_data)
}
products()
// fetch('localhost:5000/products')
// .then((response)=>response.json())
// .then((products_data)=>products_data)


fetch('localhost:5000/products/fruits')
.then((response)=> response.json())
.then ((fruitData) =>fruitData)


fetch('localhost:5000/products/vegetables')
.then((response)=> response.json())
.then ((fruitData) =>fruitData)


