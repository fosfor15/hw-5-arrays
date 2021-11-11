// Создать массив «Список покупок»

// Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.

// Написать несколько функций для работы с таким массивом.

// Функция вывода всего списка покупок на экран.
// Функция сортировки списка покупок, чтобы сначала шли некупленные продукты, а потом – купленные.
// Функция добавления покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Функция покупки продукта. Функция принимает название продукта и отмечает его как купленный.

var name;
var count;
var isBought;

let shoppingList = [

    tomato = {
        name: 'tomato',
        count: 5,
        isBought: false,
    },

    potato = {
        name: 'potato',
        count: 13,
        isBought: true,
    },

    milk = {
        name: 'milk',
        count: 1,
        isBought: false,
    },

    bread = {
        name: 'bread',
        count: 1,
        isBought: true,
    }
]

function printList(shoppingList) {
    shoppingList.forEach((product, name, count, isBought) => {
        let str = `Name: ${product.name}, count to buy = ${product.count}, is bought = ${product.isBought}`;
        console.log(str);
    });
}

printList(shoppingList);

console.log('');
console.log('If product is bought? ->');

const sortedShoppingList = [...shoppingList];

function sortIsBought() {
    sortedShoppingList.sort( (a, b) => a.isBought - b.isBought);
    return sortedShoppingList;
}

printList(sortIsBought(shoppingList));


console.log('');
console.log('Want to add a new product ->');

let shoppingListWithNewProduct = [...sortedShoppingList];//для удобства список с новыми продуктами создается на основе отстортированного списка 

function addProduct(name, count) {

    if (shoppingListWithNewProduct.find(product => product.name === name)) {
        for (var i = 0; i < shoppingListWithNewProduct.length; i++) {
            if (shoppingListWithNewProduct[i].name === name) {
                shoppingListWithNewProduct[i].count += count;
            } 
        } 
    } else {
        shoppingListWithNewProduct.push({
            name,
            count,
            isBought: false,
        }) 
    }
    return shoppingListWithNewProduct;
}

addProduct('milk', 2);
addProduct('butter', 5);
printList(shoppingListWithNewProduct);

console.log('');
console.log('Check bougtht product');

let shoppingListChecked = [...shoppingListWithNewProduct];

function checkBoughtProduct(name) {
    if (shoppingListWithNewProduct.find(product => product.name === name)) {
        for (var i = 0; i < shoppingListWithNewProduct.length; i++) {
            if (shoppingListWithNewProduct[i].name === name) {
                shoppingListWithNewProduct[i].isBought = true;
            }
        }
    }
    else {
        console.log('такого товара нет в списке, сначала добавьте его в список');
    }
    return shoppingListChecked;  
}

checkBoughtProduct('milk');
printList(shoppingListChecked);

