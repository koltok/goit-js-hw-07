//Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
//Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) 
//колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої 
//колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

//Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
// Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість
// елементів для рендеру. 

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для 
// div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const controls =  document.querySelector("#controls");
//console.dir(controls);
const childrenControls = controls.children;
const inputCon = childrenControls[0];
const createBut = childrenControls[1];
const destroyBut = childrenControls[2];

const boxes =  document.querySelector("#boxes");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
        .padStart(6, 0)}`
}
      
let amount;

function createBoxes(amount) {
   amount = Number(inputCon.value);
    if (amount < 1 || amount > 100) {
        return;
    }
    boxes.innerHTML = "";
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        size += 10;
        boxes.appendChild(box);
    }
    inputCon.value = "";
}

//function handleCreateButtonClick(event) {
  //  if(inputCon.value >= 1 && inputCon.value <= 100)
  //  {createBoxes(amount);
  //  } else {
  //  alert("Enter a value between 1 and 100");
   // }
//};

createBut.addEventListener('click', () => createBoxes(amount));
//console.log (createFun);

function destroyBoxes() {
    boxes.innerHTML = "";
}

destroyBut.addEventListener('click', destroyBoxes);






  
 



 