//selecting the main tag because we want to display data in it
// add to cart values to be added to new array purchased
let purchased = []
let main = document.querySelector('main')
let items = JSON.parse(localStorage.getItem('items'))
main.innerHTML = items.map(function(item, index){
    return `
    <div>
    <h2>${item.name}</h2>
    <h5>${item.description}</h5>
    <h5>${item.price}</>
    <h5><img src = ${item.url}></h5>
    <button value= '${index}' data-add >Add to Cart </button>
        </div>
        `
}).join('')
//can use reduce to add all the amount prices together
function add(index){
    purchased.push(items[index])
    localStorage.setItem("purchased",JSON.stringify(purchased))
}
main.addEventListener('click', function(){
    if (event.target.hasAttribute('data-add')){
        // alert ('Button Clicked')
        add(event.target.value)
    }
})

// let a = items.filter(item =>{
//          return item.name == 'Nike Shoe'

// }
    
//     )









