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





// Добавление в боди
document.body.append(mainName)
document.body.append(hungman)
document.body.append(head)
document.body.append(bodyMan)
document.body.append(leftHand)
document.body.append(leftLeg)
document.body.append(rightHand)
document.body.append(rightLeg)