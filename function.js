// Мінімум==========================================================================================================
// Напиши всі можливі варіанти створення функцій.

function declarateFirst(name) {
	console.log(`Hello, ${name}!`);
}
declarateFirst('Alex');

const declarateSecond = function(name) {
	console.log(`Привет, ${name}!`);
};
declarateSecond('Alex');

const sum = (a, b) => a + b;
console.log(sum(5, 6));
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function rideCountArguments() {
	console.log(`Кількість аргументів-` + arguments.length)
}
rideCountArguments(1, 2, 3);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function returnBigNum(a, b) {
	if ( a > b) {
		return console.log(1);
	} else if (a < b) {
		return console.log(-1);
	} else {
		return console.log(0);
	}
}
returnBigNum(1, 1);
returnBigNum(1, 0);
returnBigNum(0, 1);

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function calcFactorial(a) {
	if (a < 0) {
	return "Факторіл не рахується для від'ємних чисел";
	} else if (a === 0 || a === 1) {
	return 1;
	} else {
	let b = 1;
	for (let i = 1; i <= a; i++) {
		b *= i;
		}
		return b;
	}
}
console.log(calcFactorial(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function combNum (a, b, c) {

	return +`${a}${b}${c}`;
}
console.log(combNum(1, 2, 3));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcAreaRect(a, b) {
	if (a && b) {
		return a * b;
	} else {
		return a * a;
	}
}
console.log(calcAreaRect(5, 6));

// Норма==============================================================================================================
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function identifyPerfectNumber(a) {
	let sum = 0;
	for (let i = 1; i < a; i++) {
		if ( a % i === 0) {
			sum += i;
		}
	}
	if (sum === a && a !== 0) {
		// console.log(`${a} - досконале число`);
		return true;
	} else {
		// console.log(`${a} - не досконале число`);
		return false;
	}
}
// identifyPerfectNumber(6);

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function choosePerfNum(a, b) {
	let stringAnswer = 'Досконалі числа в цьому діапазоні-',
	counter = 0;
	for (let i = a; i <= b; i++) {
		if (identifyPerfectNumber(i)) {
			counter === 0 ? stringAnswer += i : stringAnswer += `, ${i}`;
			counter++;
		} else {
			continue;
		}
	}
	if (counter === 0) {
		stringAnswer += 'немає.';
	}
	return stringAnswer;
}
console.log(choosePerfNum(0, 10000));