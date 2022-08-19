const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('localhost:5000/products')
   
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);git 
})




fetch('localhost:5000/products/fruits')
.then((response)=> response.json())
let fruitsCategory = products.find(product.category == 'fruits')
 return fruitsCategory
.then ((fruitsCategory) => console.log(fruitsCategory))
