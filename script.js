
let shoppingList = [
    // Такие массивы объектов обычно записывают без пустых строк между }, и {
        
    {
        name: "Banana",
        requiredQuantity: 5,
        isPurchased: true
    },

    {
        name: "Water",
        requiredQuantity: 3,
        isPurchased: false
    },

    {
        name: "Glue",
        requiredQuantity: 1,
        isPurchased: false
    },

    {
        name: "Apples",
        requiredQuantity: 10,
        isPurchased: true
    }
];


// Вы можете сделать эти функции более универсальными, если они будут принимать параметр массив объектов покупок, а не обращаться к нему, как к внешнему массиву. Т.о. ваши функции смогут работать не только с одни единственным массивом, а с каким угодно подобными по структуре массивами объектов покупок.


function showShoppingList() {
    for (let elem of shoppingList) {

        console.log(elem);
        // Для целей разработки такого вывода будет более чем достаточно. Однако язык JavaScript используется для Frontend'а, который заключается в выводе данных окончательным пользователям, для которых необходимы человеко-читаемые пояснительные и уточняющие слова-формулировки вместе с выводом данных. В следующих работах реализуйте выводы именно для пользователей.
    }
}

function sortList() {
    shoppingList.sort((a, b) => a.isPurchased - b.isPurchased);
    showShoppingList();
}

function addToList(productName, amountOfProduct) {
    for (let i = 0; i <= shoppingList.length - 1; i++) {
        // Если использовать оператор "меньше чем <", то можно не выполнять операцию вычитания 1 из shoppingList.length

        if (shoppingList[i].name.includes(productName)) {
            shoppingList[i].requiredQuantity += amountOfProduct;
            return;
        } 
    }
    // Пустая строка

    shoppingList.push({
        name: productName,
        requiredQuantity: amountOfProduct,
        isPurchased: false
        });  
        //  Закрывающая часть }); должна располагаться на одной вертикали с началом имени массива shoppingList, от которого строится выхов методa push
}

function makePurchased(productName) {
    for (let i = 0; i <= shoppingList.length - 1; i++) {
        if (shoppingList[i].name.includes(productName)) {
            shoppingList[i].isPurchased = true;
            return;
        } 
    }
}
