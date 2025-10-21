// Мінімум=============================================================================
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
const shoppingList = [
	{productName:'Milk', quantityProd:3, purchaseProd:true, pricePerUnit:50, sum: 150}, 
	{productName:'Cheese', quantityProd:1, purchaseProd:false, pricePerUnit:80, sum:80}, 
	{productName:'Cake', quantityProd:5, purchaseProd:true, pricePerUnit:15 , sum:75}, 
	{productName:'Juice', quantityProd:4, purchaseProd:false, pricePerUnit:10 , sum:40}
];

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали
function sortByPurchase() {
	shoppingList.sort(function(a, b){return a.purchaseProd - b.purchaseProd});
	let text = '';
	for (let key of shoppingList) {
		text += `${key.productName} - ${key.purchaseProd ? 'придбаний' : 'не придбаний'}\n`;
	}
	return text;
}
console.log(sortByPurchase());

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct(product) {
	for (let prod of shoppingList) {
		if (prod.productName === product) {
			prod.purchaseProd = true;
		}
	}
	return sortByPurchase();
}
console.log(buyProduct('Juice'));

// Норма=================================================================================
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function deleteProduct(product) {
	const newShoppingList = [];
	for (let prod of shoppingList) {
		if (prod.productName === product) {
			continue
		} else {
			newShoppingList.push(prod)
		}
	}
	return newShoppingList;
}
console.log(deleteProduct('Cake'));

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
const newProductFirst = {productName:'biscuit', quantityProd:10, purchaseProd:false, pricePerUnit:5, sum: 50},
newProductSecond = {productName:'Cheese', quantityProd:1, purchaseProd:false, pricePerUnit:80, sum:80};
function addPurchase(product) {
	let revisionPurchase =false;
	for (let prod of shoppingList) {
		if (prod.productName === product.productName) {
			prod.quantityProd += product.quantityProd;
			prod.sum += product.sum;
			revisionPurchase = true;
		}
	}
	if (!revisionPurchase) {
		shoppingList.push(product);
	}
	return console.log(shoppingList);
}
addPurchase(newProductFirst);
addPurchase(newProductSecond);

// Максимум=====================================================================================
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.

function sumPurchase(status) {
	let sum = 0;
	for (let prod of shoppingList) {
		if (prod.purchaseProd === status || status === 'all') {
			sum += prod.pricePerUnit * prod.quantityProd;
		}
	}
	return console.log(sum);
}
sumPurchase('all');
sumPurchase(true);
sumPurchase(false);

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function sortByCondition(condition) {
	condition === 'up' ? shoppingList.sort(function(a, b){return a.sum - b.sum}) : shoppingList.sort(function(a, b){return b.sum - a.sum});
	return console.log(shoppingList);
}
sortByCondition("up");
sortByCondition("down");