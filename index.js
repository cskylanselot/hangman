// название
const mainName = document.createElement("div");
mainName.classList.add("mainName");
mainName.innerHTML = "<H1>Hungman<H1>";

// Виселица
const hungman = document.createElement("img");
hungman.classList.add("hungman");
hungman.src = "image/виселица.jpg";
hungman.alt = "Example image";

// голова
const head = document.createElement("img");
head.classList.add("head");
head.src = "image/голова.jpg";
head.alt = "Example image";
head.style.display = "none";

// тело
const bodyMan = document.createElement("img");
bodyMan.classList.add("bodyMan");
bodyMan.src = "image/тело.jpg";
bodyMan.alt = "Example image";
bodyMan.style.display = "none";

// Левая рука
const leftHand = document.createElement("img");
leftHand.classList.add("leftHand");
leftHand.src = "image/леваяРука.jpg";
leftHand.alt = "Example image";
leftHand.style.display = "none";

// Левая нога
const leftLeg = document.createElement("img");
leftLeg.classList.add("leftLeg");
leftLeg.src = "image/леваяНога.jpg";
leftLeg.alt = "Example image";
leftLeg.style.display = "none";

// Правая рука
const rightHand = document.createElement("img");
rightHand.classList.add("rightHand");
rightHand.src = "image/праваяРука.jpg";
rightHand.alt = "Example image";
rightHand.style.display = "none";

// Правая нога
const rightLeg = document.createElement("img");
rightLeg.classList.add("rightLeg");
rightLeg.src = "image/праваяНога.jpg";
rightLeg.alt = "Example image";
rightLeg.style.display = "none";

// контейнер для букв
const letters = document.createElement("div")
letters.classList.add("letters")
const container1 = document.createElement("div")
container1.classList.add("container1")
letters.append(container1)
const container2 = document.createElement("div")
container2.classList.add("container2")
letters.append(container2)
const container3 = document.createElement("div")
container3.classList.add("container3")
letters.append(container3)
const container4 = document.createElement("div")
container4.classList.add("container4")
letters.append(container4)
const container5 = document.createElement("div")
container5.classList.add("container5")
letters.append(container5)

// Колличество неправельных ответов
const error = document.createElement("div")
error.classList.add("error")
error.innerHTML = `<p>Колличество неправельных ответов 0/6</p>`

// Контейнер для загадок
const mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer")

const riddles = [
  ['С неба пришел, в землю ушел', 'дождь'],
  ['Без рук рисует, без зубов кусает', 'мороз'],
  ['Рукой махнул, дерево нагнул', 'ветер'],
  ['Висит … - нельзя скушать', 'груша'],
  ['Мягкие лапки, а в лапках — цап-царапки', 'кошка'],
  ['Кто приходит, кто уходит — все ее за ручку водят',  'дверь']
]

let currentRiddleIndex = 0;
let currentAnswer = '';
let currentContainer = 1;
let pressedKeys = new Set();
let errors = 0;

function showRiddle(index) {
  mainContainer.innerHTML = `<p>${riddles[index][0]}</p>`;
  currentAnswer = riddles[index][1];
  currentContainer = 1;
  pressedKeys = new Set();

  // Сброс классов кнопок
  document.querySelectorAll(".keyboardsButton").forEach(btn => {
    btn.classList.remove("active");
  });

  // Очистка контейнеров
  for (let i = 1; i <= 5; i++) {
    const container = document.querySelector(`.container${i}`);
    if (container) container.innerHTML = '';
  }
}

function nextRiddle() {
  currentRiddleIndex++;
  if (currentRiddleIndex >= riddles.length) {
    alert("Вы прошли игру!");
    setTimeout(() => location.reload(), 2000);
    return;
  }
  showRiddle(currentRiddleIndex);
}

function handleInput(pressed) {
  if (pressedKeys.has(pressed)) return;
  pressedKeys.add(pressed);

  const targetBtn = document.querySelector(`.keyboardsButton[data-letter="${pressed}"]`);
  if (!targetBtn || targetBtn.classList.contains("active")) return;

  targetBtn.classList.add("active");

  if (currentAnswer.includes(pressed)) {
    const indices = [];
    for (let i = 0; i < currentAnswer.length; i++) {
      if (currentAnswer[i] === pressed) indices.push(i + 1);
    }

    indices.forEach(i => {
      const container = document.querySelector(`.container${i}`);
      if (container) {
        const span = document.createElement("span");
        span.textContent = pressed;
        container.appendChild(span);
      }
    });

    const guessed = [...currentAnswer].every((ch, i) => {
      const c = document.querySelector(`.container${i+1}`);
      return c && c.textContent.includes(ch);
    });

    if (guessed) nextRiddle();
  } else {
    errors++;
    error.innerHTML = `<p>Колличество неправельных ответов ${errors}/6</p>`;

    const bodyParts = [head, bodyMan, leftHand, leftLeg, rightHand, rightLeg];
    if (errors <= bodyParts.length) {
      bodyParts[errors - 1].style.display = "flex";
    }

    if (errors >= 6) {
      alert("Игра окончена!");
      setTimeout(() => location.reload(), 2000);
    }
  }
}

const keyboard = [
  1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,
  1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083,
  1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100,
  1073, 1102
];

function initKeyboard() {
  const container = document.querySelector("#keyboard");
  let out = "";
  for (let i = 0; i < keyboard.length; i++) {
    const letter = String.fromCharCode(keyboard[i]);
    out += `<div class="keyboardsButton" data-letter="${letter}">${letter}</div>`;
  }
  container.innerHTML = out;
}

initKeyboard();

// Слушатели

document.onkeypress = function (event) {
  const pressed = event.key.toLowerCase();
  handleInput(pressed);
};

document.querySelectorAll(".keyboardsButton").forEach((btn) => {
  btn.onclick = function () {
    const pressed = this.dataset.letter;
    handleInput(pressed);
  };
});

// Добавление в боди
document.body.append(mainName)
document.body.append(hungman)
document.body.append(head)
document.body.append(bodyMan)
document.body.append(leftHand)
document.body.append(leftLeg)
document.body.append(rightHand)
document.body.append(rightLeg)
document.body.append(mainContainer)
document.body.append(letters)
document.body.append(error)

// Показываем первую загадку
showRiddle(0);