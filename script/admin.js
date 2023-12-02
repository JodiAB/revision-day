//this is where all products will be stored

let items =[]
//Object created manually
let object1 ={
    id:1,
    name: 'Nike shoe',
    description: 'This is better than the original',
    price: 800,
    url:'https://static.nike.com/a/images/t_default/q3tx0zbjfdhuayuuqtj4/ebernon-low-shoe-04dgFq.png'
}

//function to create objects
function Constructor(id, name, description,price,url){
    this.id=id,
    this.name=name,
    this.description=description,
    this.price=price,
    this.url=url

}
//second item created using constructor

let item2 = new Constructor(2, 'AnotherNike', 'This is better than the fake', 700, "https://static.nike.com/a/images/t_default/q3tx0zbjfdhuayuuqtj4/ebernon-low-shoe-04dgFq.png")


//pushing items to array
items.push(object1, item2);
//sets the array in local storage
localStorage.setItem('items',JSON.stringify(items))
//sets the array from local storage to array(items) in code
items=JSON.parse(localStorage.getItem('items'));

//table is the tag that im trying to get
let table= document.querySelector('table');

function Jodi(){
    let products = items.map(function(item, position) {
        console.log(item);
        console.log(position);
        return `
            <tr>

            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R${item.price}</td>
            <td><img src="${item.url}"</td>
            <td><button>Edit</button></td>
            <td><button class="delete" value="${position}">Delete</button></td>
            </tr>
    `
})

table.innerHTML = products.join('');
}
Jodi();
function favorite(){
    localStorage.setItem('items',JSON.stringify(items))
//sets the array from local storage to array(items) in code
items=JSON.parse(localStorage.getItem('items'));
}

function remove(index, callback){
   items.splice(index, 1);
   favorite();
   Jodi();
  
}
let deleteButton = document.querySelector('.delete')
table.addEventListener('click', function(){

if(event.target.classList.contains('delete')){
// remove()

remove(event.target.value, Jodi())
}


})

//callback function
// function one(){

// }

// function two (callback){
// callback()
// }
// two(one())