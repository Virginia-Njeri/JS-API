const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('https://jsonplaceholder.typicode.com/todos/posts')
   
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);git 
})
.catch(function (error) {
console.log('404', error);
});