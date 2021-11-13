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
// В современном JS используют объявление переменных с исп. команды let. Команда var используется тогда, когда необъодимы особенности таких переменных.
// Также эти переменные нигде не используются

let shoppingList = [

    // Имена tomato и пр., к которым вы присваиваете объекты, относятся к каким сущностям? Когда мы записываем имя слева от = , мы либо создаем сущность с таким именем, либо используем уже существующую сущность.
    // В массиве объектов каждый объект-элемент массива не должен храниться под каким-либо именем сущности, он будет хранится как элемент массива под своим собственным индексом.
    // При оформлении массива объектов сами объекты записываются без имён и только с фигурными скобками. Посмотрите на примеры подобных массивов объектов в нашей практике по массивам.
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
// Инструкции с приваиванием необходимо завершать ;

function printList(shoppingList) {
    // Отлично!
    shoppingList.forEach((product, name, count, isBought) => {
        let str = `Name: ${product.name}, count to buy = ${product.count}, is bought = ${product.isBought}`;
        console.log(str);
    });
}

printList(shoppingList);

console.log('');
console.log('If product is bought? ->');

const sortedShoppingList = [...shoppingList];

// Для работы этой функции всегда потребуется наличие внешней сущности sortedShoppingList. Гораздо правильнее, если эта функция будет принмать массив объектов в виде аргумента и копировать его в свою локальную сущность sortedShoppingList, а потом сортировать её и возвращать.
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

        // Здесь можно использовать результат работы метода find – он уже найдёт нужный объект в массиве покупок, т.о. вам не придётся искать этот объект покупки заново через цикл for.
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
    // Совсем не нужно возвращать результат из функции, если этот результат находится во внешней сущности. Вы уже изменили внешний массив shoppingListWithNewProduct и данной функции не нужно возвращать этот результат.
}

addProduct('milk', 2);
addProduct('butter', 5);
printList(shoppingListWithNewProduct);

console.log('');
console.log('Check bougtht product');

let shoppingListChecked = [...shoppingListWithNewProduct];

function checkBoughtProduct(name) {
    if (shoppingListWithNewProduct.find(product => product.name === name)) {
        
        // Здесь то же, как и в прошлой функции
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

