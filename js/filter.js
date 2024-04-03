let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'test',
        price: 205600,
        quantity: 0,
        image: 'img/shop/shop-1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name: 'test-grey',
        price: 300000,
        quantiy: 30,
        image: 'img/shop/shop-2.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 3,
        name: 'test',
        price: 200000,
        quantiy: 30,
        image: 'img/shop/shop-3.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name: 'test2',
        price: 400000,
        quantiy: 30,
        image: 'img/shop/shop-4.jpg',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 5,
        name: 'test',
        price: 320000,
        quantiy: 30,
        image: 'img/shop/shop-5.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name: 'test',
        price: 100000,
        quantiy: 30,
        image: 'img/shop/shop-1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
    {
        id: 7,
        name: 'test',
        price: 100000,
        quantiy: 30,
        image: 'img/shop/shop-7.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
    {
        id: 8,
        name: 'test',
        price: 100000,
        quantiy: 30,
        image: 'img/shop/shop-8.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
    {
        id: 9,
        name: 'test',
        price: 100000,
        quantiy: 30,
        image: 'img/shop/shop-9.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' đ';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})