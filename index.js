// название
const mainName = document.createElement("div");
mainName.classList.add("mainName");
mainName.innerHTML = "<H1>Hungman<H1>";
// 

// Виселица
const hungman = document.createElement("img");
hungman.classList.add("hungman");
hungman.src = "image/виселица.jpg";
hungman.alt = "Example image";
// 

// голова
const head = document.createElement("img");
head.classList.add("head");
head.src = "image/голова.jpg";
head.alt = "Example image";
// 

// тело
const bodyMan = document.createElement("img");
bodyMan.classList.add("bodyMan");
bodyMan.src = "image/тело.jpg";
bodyMan.alt = "Example image";
// 

// Левая рука
const leftHand = document.createElement("img");
leftHand.classList.add("leftHand");
leftHand.src = "image/леваяРука.jpg";
leftHand.alt = "Example image";
// 

// Левая нога
const leftLeg = document.createElement("img");
leftLeg.classList.add("leftLeg");
leftLeg.src = "image/леваяНога.jpg";
leftLeg.alt = "Example image";
// 

// Правая рука
const rightHand = document.createElement("img");
rightHand.classList.add("rightHand");
rightHand.src = "image/праваяРука.jpg";
rightHand.alt = "Example image";
// 

// Правая нога
const rightLeg = document.createElement("img");
rightLeg.classList.add("rightLeg");
rightLeg.src = "image/праваяНога.jpg";
rightLeg.alt = "Example image";
// 

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
// 

// Контейнер для загадок
const mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer")
mainContainer.innerHTML = `<p> 
С неба пришел, в землю ушел - дождь<br>
Без рук рисует, без зубов кусает - мороз<br>
Рукой махнул, дерево нагнул - ветер <br>
Висит … - нельзя скушать - груша <br>
Мягкие лапки, а в лапках — цап-царапки - кошка <br>
Кто приходит, кто уходит — все ее за ручку водят - дверь </p>`
// 

// Клавиатура
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

// Подсветка по нажатию клавиши на физической клавиатуре
document.onkeypress = function (event) {
  const pressed = event.key.toLowerCase();
  document.querySelectorAll(".keyboardsButton").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.letter === pressed) {
      btn.classList.add("active");
    }
  });
};

// Подсветка по клику мыши на экранной кнопке
document.querySelectorAll(".keyboardsButton").forEach((btn) => {
  btn.onclick = function () {
    document.querySelectorAll(".keyboardsButton").forEach((b) => {
      b.classList.remove("active");
    });
    this.classList.add("active");
  };
});
// 






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
