let div = document.createElement('div');
  div.className = "title";
  div.innerHTML = "Virtual keyboard";
  document.body.append(div);

  let divForm = document.createElement('div');
  divForm.className = "form-container";
  document.body.append(divForm);
  let textarea = document.createElement('textarea');
  textarea.className = "form";
  textarea.setAttribute("rows",10);
  divForm.append(textarea);

  let keyboardContainer = document.createElement('div');
  keyboardContainer.id = "keyboard";
  document.body.append(keyboardContainer);
  let ruKeyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92,'Del','CapsLock', 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101,'Enter','ShiftLeft', 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46,'ArrowUp','ShiftRight','ControlLeft','MetaLeft', 'AltLeft', 'Space', 'AltRight','ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enKeyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 92, 93, 91, 112, 111, 105, 117, 121, 116, 114, 101, 119, 113,'Del','CapsLock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,'Enter', 'ShiftLeft',13, 47, 46, 44, 109, 110, 98, 118, 99, 120, 122,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let ruCaps = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace','Tab', 92, 1098, 1093, 1079, 1097, 1096, 1075, 1085, 1077, 1082, 1091, 1094, 1081,'Del','CapsLock', 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101,'Enter','ShiftLeft', 46, 1102, 1073, 1100, 1090, 1080, 1084, 1089, 1095, 1103,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enCaps = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,'Del','CapsLock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,'Enter','ShiftLeft', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let ruShift = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43,'Backspace','Tab', 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47,'Del','CapsLock', 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069,'Enter','ShiftLeft', 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enShift = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,'Backspace','Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,'Del','CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34,'Enter','ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 60, 62, 63,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];

  function init(){
     let out = '';
     for(let i=0; i < ruKeyboard.length; i++){
        if(i == 14 || i == 29 || i == 43 || i ==56) {
           out += '<div class="clear"></div>';
        }
        if(typeof(ruKeyboard[i]) == 'number'){
        out +=`<div class="key"><div class = "key-ru"><div class="normal-ru">
        ${String.fromCharCode(ruKeyboard[i])}</div><div class="caps-ru" hidden>
        ${String.fromCharCode(ruCaps[i])}</div><div class="shift-ru" hidden>
        ${String.fromCharCode(ruShift[i])}</div></div><div class = "key-en" hidden><div class="normal-en">
        ${String.fromCharCode(enKeyboard[i])}</div><div class="caps-en" hidden>
        ${String.fromCharCode(enCaps[i])}</div><div class="shift-en" hidden>
        ${String.fromCharCode(enShift[i])}</div></div></div>`;
        }
        else{
         out +=`<div class="key ${ruKeyboard[i].toLowerCase()}"><div class = "key-ru"><div class="normal-ru">
         ${ruKeyboard[i]}</div><div class="caps-ru" hidden>
         ${ruCaps[i]}</div><div class="shift-ru" hidden>
         ${ruShift[i]}</div></div><div class = "key-en" hidden><div class="normal-en">
         ${enKeyboard[i]}+'</div><div class="caps-en" hidden>
         ${enCaps[i]}+'</div><div class="shift-en" hidden>
         ${enShift[i]}+'</div></div></div>`;
        }
     }
     document.querySelector('#keyboard').innerHTML = out;
  }
  init();

let arrowUp = document.querySelector(".arrowup").childNodes;
let arrowUpRu = arrowUp[0].childNodes;
let arrowUpEn = arrowUp[1].childNodes;
for(let element of arrowUpRu){
   element.innerHTML = '&#9650;';
}
for(let element of arrowUpEn){
   element.innerHTML = '&#9650;';
}
let arrowDown = document.querySelector(".arrowdown").childNodes;
let arrowDownRu = arrowDown[0].childNodes;
let arrowDownEn = arrowDown[1].childNodes;
for(let element of arrowDownRu){
   element.innerHTML = '&#9660;';
}
for(let element of arrowDownEn){
   element.innerHTML = '&#9660;';
}
let arrowLeft = document.querySelector(".arrowleft").childNodes;
let arrowLeftRu = arrowLeft[0].childNodes;
let arrowLeftEn = arrowLeft[1].childNodes;
for(let element of arrowLeftRu){
   element.innerHTML = '&#9668;';
}
for(let element of arrowLeftEn){
   element.innerHTML = '&#9668;';
}
let arrowRight = document.querySelector(".arrowright").childNodes;
let arrowRightRu = arrowRight[0].childNodes;
let arrowRightEn = arrowRight[1].childNodes;
for(let element of arrowRightRu){
   element.innerHTML = '&#9658;';
}
for(let element of arrowRightEn){
   element.innerHTML = '&#9658;';
}
let shiftLeft = document.querySelector(".shiftleft").childNodes;
let shiftLeftRu = shiftLeft[0].childNodes;
let shiftLefttEn = shiftLeft[1].childNodes;
for(let element of shiftLeftRu){
   element.innerHTML = 'Shift';
}
for(let element of shiftLefttEn){
   element.innerHTML = 'Shift';
}
let shiftRight = document.querySelector(".shiftright").childNodes;
let shiftRightRu = shiftRight[0].childNodes;
let shiftRightEn = shiftRight[1].childNodes;
for(let element of shiftRightRu){
   element.innerHTML = 'Shift';
}
for(let element of shiftRightEn){
   element.innerHTML = 'Shift';
}
let controlRight = document.querySelector(".controlright").childNodes;
let controlRightRu = controlRight[0].childNodes;
let controlRightEn = controlRight[1].childNodes;
for(let element of controlRightRu){
   element.innerHTML = 'ctrl';
}
for(let element of controlRightEn){
   element.innerHTML = 'ctrl';
}
let controlLeft = document.querySelector(".controlleft").childNodes;
let controlLeftRu = controlLeft[0].childNodes;
let controlLeftEn = controlLeft[1].childNodes;
for(let element of controlLeftRu){
   element.innerHTML = 'ctrl';
}
for(let element of controlLeftEn){
   element.innerHTML = 'ctrl';
}
let metaLeft = document.querySelector(".metaleft").childNodes;
let metaLeftRu = metaLeft[0].childNodes;
let metaLeftEn = metaLeft[1].childNodes;
for(let element of metaLeftRu){
   element.innerHTML = 'win';
}
for(let element of metaLeftEn){
   element.innerHTML = 'win';
}
let altLeft = document.querySelector(".altleft").childNodes;
let altLeftRu = altLeft[0].childNodes;
let altLeftEn = altLeft[1].childNodes;
for(let element of altLeftRu){
   element.innerHTML = 'alt';
}
for(let element of altLeftEn){
   element.innerHTML = 'alt';
}
let altRight = document.querySelector(".altright").childNodes;
let altRightRu = altRight[0].childNodes;
let altRightEn = altRight[1].childNodes;
for(let element of altRightRu){
   element.innerHTML = 'alt';
}
for(let element of altRightEn){
   element.innerHTML = 'alt';
}
let space = document.querySelector(".space").childNodes;
let spaceRu = space[0].childNodes;
let spaceEn = space[1].childNodes;
for(let element of spaceRu){
   element.innerHTML = '';
}
for(let element of spaceEn){
   element.innerHTML = '';
}