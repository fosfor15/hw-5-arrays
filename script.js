
let shoppingList = [

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

function showShoppingList() {
    for (let elem of shoppingList) {
        console.log(elem);
    }
}

function sortList() {
    shoppingList.sort((a, b) => a.isPurchased - b.isPurchased);
    showShoppingList();
}

function addToList(productName, amountOfProduct) {
    for (let i = 0; i <= shoppingList.length - 1; i++) {
        if (shoppingList[i].name.includes(productName)) {
            shoppingList[i].requiredQuantity += amountOfProduct;
            return;
        } 
    }
    shoppingList.push({
        name: productName,
        requiredQuantity: amountOfProduct,
        isPurchased: false
        });                   
}

function makePurchased(productName) {
    for (let i = 0; i <= shoppingList.length - 1; i++) {
        if (shoppingList[i].name.includes(productName)) {
            shoppingList[i].isPurchased = true;
            return;
        } 
    }
}
