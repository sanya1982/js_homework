// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.


document.addEventListener('DOMContentLoaded', () => {

	const bodyItem = document.querySelector('body');

	const startChalenge = function() {
		bodyItem.innerHTML = '' + '<div class="wrapper"><div class="wrapper__item"><h2>Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з`являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з`являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.</h2><button>перейти</button>		</div>		<div class="wrapper__item"><h2>Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.</h2>		<button>перейти</button></div><div class="wrapper__item"><h2>Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.</h2><button>перейти</button>';
		const btnStart = document.querySelectorAll('button');
		btnStart.forEach(function(item, i) {
			item.addEventListener('click', () => {
				if (i == 0) {
					firstChalenge();
				} else if (i == 1) {
					secondChalenge();
				} else {
					thirdChalenge();
				}
			})
		})
	}

	const thirdChalenge = function() {

		bodyItem.innerHTML = '' + '<button>повернутись</button><h2>Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.</h2><div class="area">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi magni perferendis, tenetur ex accusantium quibusdam facere hic natus maxime, unde esse est repellat. Nam ipsum ex similique minus deserunt nostrum?</div>';
		const thirdTextArea = document.querySelector('.area');
		let isResizing = false; 
    let startX;             
    let startY;             
    let startWidth;         
    let startHeight;
		thirdTextArea.addEventListener('mousedown', (e) => {
        const rect = thirdTextArea.getBoundingClientRect();
        
        const isNearRight = (e.clientX > rect.right - 15);
        const isNearBottom = (e.clientY > rect.bottom - 15);

        if (!isNearRight || !isNearBottom) {
            return;
        }

        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        
        startWidth = thirdTextArea.offsetWidth;
        startHeight = thirdTextArea.offsetHeight;
        
        e.preventDefault(); 
    });
		
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) {
            return; 
        }

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
				const newWidth = startWidth + deltaX;
        const newHeight = startHeight + deltaY;
        thirdTextArea.style.width = newWidth + 'px';
        thirdTextArea.style.height = newHeight + 'px';
    });

    document.addEventListener('mouseup', () => {
        isResizing = false;
    });
returnBtn();
}
	

	const secondChalenge = function() {
		bodyItem.innerHTML = '';
		bodyItem.innerHTML = `<button>повернутись</button><h2>Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.</h2>`;
		const dataSheet = [
			{ukr: 'стіл', eng: 'table', countLetters: 5, category: 'home', id: 10},
			{ukr: 'ванна', eng: 'bath', countLetters: 4, category: 'home', id: 30},
			{ukr: 'лев', eng: 'lion', countLetters: 4, category: 'animals', id: 50},
			{ukr: 'вовк', eng: 'wolf', countLetters: 4, category: 'animals', id: 40},
			{ukr: 'чорний', eng: 'black', countLetters: 5, category: 'colors', id: 1},
			{ukr: 'білий', eng: 'white', countLetters: 5, category: 'colors', id: 2}
		];

			tableData = document.createElement("table"),
		theadData = document.createElement("thead"),
		headerRowData = document.createElement("tr"),
		thUkrData = document.createElement("th");
		thUkrData.textContent = "Ukr";
		headerRowData.appendChild(thUkrData);
		const thEngData = document.createElement("th");
		thEngData.textContent = "Eng";
		headerRowData.appendChild(thEngData);
		const thCountData = document.createElement("th");
		thCountData.textContent = "CountLetters";
		headerRowData.appendChild(thCountData);
		const thCategoryData = document.createElement("th");
		thCategoryData.textContent = "Category";
		headerRowData.appendChild(thCategoryData);
		const thIdData = document.createElement("th");
		thIdData.textContent = "Id";
		headerRowData.appendChild(thIdData);

		theadData.appendChild(headerRowData);
		tableData.appendChild(theadData);


const tbody = document.createElement("tbody");
const createTable = function() {
dataSheet.forEach(item => {
  const rowData = document.createElement("tr");

  const tdUkrData = document.createElement("td");
  tdUkrData.textContent = item.ukr;
  rowData.appendChild(tdUkrData);

  const tdEngData = document.createElement("td");
  tdEngData.textContent = item.eng;
  rowData.appendChild(tdEngData);

	const tdCountData = document.createElement("td");
  tdCountData.textContent = item.countLetters;
  rowData.appendChild(tdCountData);

	const tdCategoryData = document.createElement("td");
  tdCategoryData.textContent = item.category;
  rowData.appendChild(tdCategoryData);

	const tdIdData = document.createElement("td");
  tdIdData.textContent = item.id;
  rowData.appendChild(tdIdData);

  tbody.appendChild(rowData);
});

tableData.appendChild(tbody);

bodyItem.appendChild(tableData);
		};
		createTable();

		
		
		const thElement = document.querySelectorAll('th');
		isToggle = true;
		
		thElement.forEach(function(item, i) {
			item.addEventListener('click', () => {
				if (item.innerHTML == 'Ukr') {
					isToggle ? dataSheet.sort((a, b) => a.ukr.toUpperCase().localeCompare(b.ukr.toUpperCase())) : dataSheet.sort((a, b) => b.ukr.toUpperCase().localeCompare(a.ukr.toUpperCase())); 
				} else if (item.innerHTML == 'Eng') {
					isToggle ? dataSheet.sort((a, b) => a.eng.toUpperCase().localeCompare(b.eng.toUpperCase())) : dataSheet.sort((a, b) => b.eng.toUpperCase().localeCompare(a.eng.toUpperCase()));
				} else if (item.innerHTML == 'CountLetters') {
					isToggle ? dataSheet.sort((a, b) => a.countLetters - b.countLetters) : dataSheet.sort((a, b) => b.countLetters - a.countLetters);
				} else if (item.innerHTML == 'Category') {
					isToggle ? dataSheet.sort((a, b) => a.category.toUpperCase().localeCompare(b.category.toUpperCase())) : dataSheet.sort((a, b) => b.category.toUpperCase().localeCompare(a.category.toUpperCase()));
				} else {
					isToggle ? dataSheet.sort((a, b) => a.id - b.id) : dataSheet.sort((a, b) => b.id - a.id);
				}
				isToggle = !isToggle;
				tbody.innerHTML = '';
				createTable();
			})
		})
		returnBtn();
	}


	const firstChalenge = function() {
	let tagItem = 'div';
	let textItem = '';
	const writeContent = function() {
		bodyItem.innerHTML = `<button>повернутись</button><h2>При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.</h2><${tagItem} class="events">${textItem}</${tagItem}>`;
	}
	writeContent();

document.addEventListener('keydown', (e) => {	
	if (e.code == 'KeyE' && e.ctrlKey) {
			e.preventDefault();
			tagItem = 'textarea name="textarea" id="textarea"';
		writeContent();
		returnBtn();
		let textAreaItem = document.querySelector('textarea');
		document.addEventListener('keydown', (e) => {
			if (e.code == 'KeyS' && e.ctrlKey) {
				e.preventDefault();
				textItem += `${textAreaItem.value} `;
				tagItem = 'div';
				writeContent();
				returnBtn();
			}
		})
		}
	})
	returnBtn();
	}

	const returnBtn = function() {
		const btnReturn = document.querySelector('button');
		btnReturn.addEventListener('click', () => {
			startChalenge();
		});
	}
	startChalenge();
})