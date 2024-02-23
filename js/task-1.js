//орахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і 
//кількість елементів у категорії (усіх <li>, вкладених у нього).

const categUl = document.querySelectorAll(".item")
console.log(`Number of categories: ${categUl.length}`); 

const categUlli = document.querySelectorAll('.item > ul')
categUl.forEach((categLi) => console.log (`Category: ${categLi.firstElementChild.textContent}
Elements: ${categUlli.length}`))
