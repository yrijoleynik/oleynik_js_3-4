
'use strict'

// Объект с методами
var page = {
	// Создание элемента
	createElem: function (element, content, clasname) {
		var el = document.createElement(element);
		el.innerHTML = content;
		el.className = clasname;
		return el;	
	},
	// Добавление элемента на страницу после "родителя"
	addElem: function (parentEl, el) {
		var domEL = document.querySelector(parentEl);
		domEL.appendChild(el);
	},
	// Вариант ответа
	createAnswer: function (content, clasname, typeValue, nameValue, nameId ) {
		// 
		var anws = this.createElem("input", "", clasname);
		anws.setAttribute("type", typeValue);
		anws.setAttribute("name", nameValue);
		anws.setAttribute("id", nameId);
		this.addElem(".container", anws);
		var anwslabel = this.createElem ("label", content, "");
		anwslabel.setAttribute("for", nameId );
		var br = document.createElement("br");
		this.addElem(".container", anwslabel);
		this.addElem(".container", br);
	},
	button: function (content, clasname) {
		var btn = this.createElem("button", content, clasname);
		this.addElem(".container", btn);
	}
};

// Создаём и добавляем на страницу основной div
var elemt = page.createElem("div", "", "container");
page.addElem("body", elemt);

// Создаём и добавляем в div заголовок 
elemt = page.createElem("h1", "Тест по программированию", "h1");
page.addElem("div", elemt );

// Блок вопросов 

	for (var i = 1; i <= 3; i++) {
		// Ввод и вывод вопроса
		// var qustion = prompt("Вопрос  № " + i, ' Вопрос № ' + i);
		    elemt = page.createElem("p", obj['qustion' + i], ""); // получаем вопрос из объекта
		page.addElem(".container", elemt );

			// Варианты ответов
			for (var j = 1; j <= 3; j++) {
				// Ввод и вывод вариантов ответа
				// var answer = prompt("Ответ  № " + j, ' Ответ № ' + j);
				var chk = "chk" + i + "-" + j;
				page.createAnswer(obj['answer' + i + j], "", "checkbox", "name", chk); //получаем ответ из объекта
				}	
		};	

	// Кнопка 
	page.button("Проверить мои результаты", "btn btn-primary");		





		
