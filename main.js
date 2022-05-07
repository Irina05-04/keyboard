let div = document.createElement('div');
  div.className = "title";
  div.innerHTML = "Virtual keyboard";
  document.body.append(div);

  let divForm = document.createElement('div');
  divForm.id = "form-container";
  document.body.append(divForm);
  let textarea = document.createElement('textarea');
  textarea.className = "form";
  textarea.setAttribute("rows",10);
  divForm.append(textarea);

  let keyboardContainer = document.createElement('div');
  keyboardContainer.id = "keyboard";
  document.body.append(keyboardContainer);

  let info = document.createElement('div');
  info.className = 'info';
  info.innerHTML = "Создано в Windows, Левые ctrl и alt - переключение языка, мышью язык переключается по нажатию ctrl.<br> Раскладка языка на компьютере должна совпадать с виртуальной иначе текст не напечатается.";
  document.body.append(info);

  document.querySelector('body').setAttribute('data','body');
  document.querySelector('#form-container').setAttribute('data','form');
  document.querySelector('.form').setAttribute('data','form');

  let ruKeyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92,'Delete','CapsLock', 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101,'Enter','ShiftLeft', 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46,'ArrowUp','ShiftRight','ControlLeft','MetaLeft', 'AltLeft', 'Space', 'AltRight','ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enKeyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,'Delete','CapsLock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,'Enter', 'ShiftLeft', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let ruCaps = [1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace','Tab', 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92,'Delete','CapsLock', 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069,'Enter','ShiftLeft', 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enCaps = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,'Backspace','Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92,'Delete','CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39,'Enter','ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 44, 46, 47,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let ruShift = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43,'Backspace','Tab', 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47,'Delete','CapsLock', 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069,'Enter','ShiftLeft', 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enShift = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,'Backspace','Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,'Delete','CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34,'Enter','ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 60, 62, 63,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let keyboardCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal','Backspace','Tab','KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete','CapsLock','KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote','Enter','ShiftLeft','KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash','ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let en = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47];
  let ruCapsShift = [1105, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43,'Backspace','Tab', 1081, 1094, 1091, 1082, 1077, 1085, 1043, 1096, 1097, 1079, 1093, 1098, 47,'Delete','CapsLock', 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101,'Enter','ShiftLeft', 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 44,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight'];
  let enCapsShift = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,'Backspace','Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,'Delete','CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34,'Enter','ShiftLeft', 90, 88, 67, 86, 66, 78, 77, 60, 62, 63,'ArrowUp','ShiftRight','ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight']; 

  //   document.onkeypress = function(event){
//       en.push(event.charCode);
//       console.log(en);
//    }


  function draw(){
     let out = '';
     for(let i = 0; i < ruKeyboard.length; i++){
      //   if(i == 14 || i == 29 || i == 43 || i ==56) {
      //      out += '<div class="clear"></div>';
      //   }
        if(typeof(ruKeyboard[i]) == 'number'){
        out +=`<div class="key" data="${keyboardCode[i]}"><div class = "key-ru"><div class="normal-ru">
        ${String.fromCharCode(ruKeyboard[i])}</div><div class="caps-ru" hidden>
        ${String.fromCharCode(ruCaps[i])}</div><div class="shift-ru" hidden>
        ${String.fromCharCode(ruShift[i])}</div><div class="capsShift-ru" hidden>
        ${String.fromCharCode(ruCapsShift[i])}</div></div><div class = "key-en" hidden><div class="normal-en">
        ${String.fromCharCode(enKeyboard[i])}</div><div class="caps-en" hidden>
        ${String.fromCharCode(enCaps[i])}</div><div class="shift-en" hidden>
        ${String.fromCharCode(enShift[i])}</div><div class="capsShift-en" hidden>
        ${String.fromCharCode(enCapsShift[i])}</div></div></div>`;
        }
        else{
         out +=`<div class="key ${ruKeyboard[i].toLowerCase()}" data="${keyboardCode[i]}"><div class = "key-ru"><div class="normal-ru">
         ${ruKeyboard[i]}</div><div class="caps-ru" hidden>
         ${ruCaps[i]}</div><div class="shift-ru" hidden>
         ${ruShift[i]}</div><div class="capsShift-ru" hidden>
         ${ruCapsShift[i]}</div></div><div class = "key-en" hidden><div class="normal-en">
         ${enKeyboard[i]}</div><div class="caps-en" hidden>
         ${enCaps[i]}</div><div class="shift-en" hidden>
         ${enShift[i]}</div><div class="capsShift-en" hidden>
         ${enCapsShift[i]}</div></div></div>`;
        }
     }
     document.querySelector('#keyboard').innerHTML = out;
  }
  draw();

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
let shiftLeftEn = shiftLeft[1].childNodes;
for(let element of shiftLeftRu){
   element.innerHTML = 'Shift';
}
for(let element of shiftLeftEn){
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
let del = document.querySelector(".delete").childNodes;
let delRu = del[0].childNodes;
let delEn = del[1].childNodes;
for(let element of delRu){
   element.innerHTML = 'del';
}
for(let element of delEn){
   element.innerHTML = 'del';
}

let backspace = document.querySelector(".backspace").childNodes;
let backspaceEn = backspace[1].childNodes;
for(let element of backspaceEn){
   element.innerHTML = 'Backspace';
}
let capsLock = document.querySelector(".capslock").childNodes;
let capsLockEn = capsLock[1].childNodes;
for(let element of capsLockEn){
   element.innerHTML = 'CapsLock';
}
let enter = document.querySelector(".enter").childNodes;
let enterEn = enter[1].childNodes;
for(let element of enterEn){
   element.innerHTML = 'Enter';
}
let tab = document.querySelector(".tab").childNodes;
let tabEn = tab[1].childNodes;
for(let element of tabEn){
   element.innerHTML = 'Tab';
}


let keyRu = document.querySelectorAll('#keyboard .key .key-ru');
let keyEn = document.querySelectorAll('#keyboard .key .key-en');
let shiftKeyRu = document.querySelectorAll('#keyboard .key .key-ru .shift-ru');
let capsKeyRu = document.querySelectorAll('#keyboard .key .key-ru .caps-ru');
let capsShiftKeyRu = document.querySelectorAll('#keyboard .key .key-ru .capsShift-ru');
let normalKeyRu = document.querySelectorAll('#keyboard .key .key-ru .normal-ru');
let shiftKeyEn = document.querySelectorAll('#keyboard .key .key-en .shift-en');
let capsKeyEn = document.querySelectorAll('#keyboard .key .key-en .caps-en');
let capsShiftKeyEn = document.querySelectorAll('#keyboard .key .key-ru .capsShift-en');
let normalKeyEn = document.querySelectorAll('#keyboard .key .key-en .normal-en');
let allKey = document.querySelectorAll('#keyboard .key');
let textForm = document.querySelector('#form-container .form');
//console.log(textForm);

document.onkeydown = function(event){
   if(event.key.toString() == 'Escape' || event.key == 'F1' || event.key == 'F2' || event.key == 'F3' || event.key == 'F4' ||event.key == 'F5' ||   event.key == 'F6' || event.key == 'F7' || event.key == 'F8' || event.key == 'F9' || event.key == 'F10' || event.key == 'F11' || event.key == 'F12' || event.key == 'Pause' || event.key == 'PrintScreen'){
      event.preventDefault(); 
      return;
   }
   if(event.code == 'ShiftLeft'){  
      shift();   
      document.onkeypress = function(event){
         document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.add('active'); 
      }
   }
   if(event.code == 'ControlLeft'){
      //control();         
   }
   //=============Caps==========
    if(event.code == 'CapsLock'){
      console.log('caps');
      caps();
   }
   //===========end caps==========
   else{
      let element = document.querySelector(`#keyboard .key[data="${event.code}"]`);
      element.classList.add('active');
      let point = document.querySelectorAll(`#keyboard .key`)[0];
      //console.log(point.childNodes[1]);
      
      if(point.childNodes[1].hasAttribute('hidden')){
         if(!point.childNodes[0].childNodes[0].hasAttribute('hidden')){
            for(let el of ruKeyboard){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
         console.log(point.childNodes[0].childNodes[1]);

         if(!point.childNodes[0].childNodes[1].hasAttribute('hidden')){
            for(let el of ruCaps){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
         if(!point.childNodes[0].childNodes[2].hasAttribute('hidden')){
            for(let el of ruShift){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
      }
      else{
         if(!point.childNodes[1].childNodes[0].hasAttribute('hidden')){
            for(let el of enKeyboard){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
         if(!point.childNodes[1].childNodes[1].hasAttribute('hidden')){
            for(let el of enCaps){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
         if(!point.childNodes[1].childNodes[2].hasAttribute('hidden')){
            for(let el of enShift){
               if(String.fromCharCode(el) == event.key){
                  textForm.value += `${event.key}`;
               }
            }
         }
      }
      if(element.getAttribute('data') != 'ControlLeft' && element.getAttribute('data') != 'ControlRight' && element.getAttribute('data') != 'Space'){
        // textForm.value += `${event.key}`;
      }
      if(element.getAttribute('data') == 'Space'){
         textForm.value += ` `;
       }
       if(element.getAttribute('data') == 'Enter'){
         textForm.value += `\n`;
       }
       if(element.getAttribute('data') == 'Tab'){
         event.preventDefault();
         textForm.value += `  `;
       }
       if(element.getAttribute('data') == 'AltRight'){
         event.preventDefault();
       }
       if(element.getAttribute('data') == 'ArrowUp'){
         event.preventDefault();
         textForm.value += `ᐃ`;
       }
       if(element.getAttribute('data') == 'ArrowDown'){
         event.preventDefault();
         textForm.value += `ᐁ`;
       }
       if(element.getAttribute('data') == 'ArrowRight'){
         event.preventDefault();
         textForm.value += `ᐅ`;
       }
       if(element.getAttribute('data') == 'ArrowLeft'){
         event.preventDefault();
         textForm.value += `ᐊ`;
       }
       if(element.getAttribute('data') == 'Backspace'){
          console.log(textForm.value.substring(0, textForm.value.length - 1));
         textForm.value = textForm.value.substring(0, textForm.value.length - 1);
         event.preventDefault()
       }
       if(element.getAttribute('data') == 'Delete'){
        textForm.value = textForm.value.substring(0, textForm.value.length - 1);
        event.preventDefault()
      }
       
   }
}

document.onkeyup = function(event){
   if(event.key.toString() == 'Escape' || event.key == 'F1' || event.key == 'F2' || event.key == 'F3' || event.key == 'F4' ||event.key == 'F5' ||   event.key == 'F6' || event.key == 'F7' || event.key == 'F8' || event.key == 'F9' || event.key == 'F10' || event.key == 'F11' || event.key == 'F12' || event.key == 'Pause' || event.key == 'PrintScreen'){
      event.preventDefault(); 
      return;
   }
   document.querySelector(`#keyboard .key[data="ShiftLeft"]`).classList.remove("active"); 
   //document.querySelector(`#keyboard .key[data="ControlLeft"]`).classList.remove("active"); 
   if(event.code != 'CapsLock'){      
      document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.remove('active'); 
   }
   if(event.code == 'ShiftLeft'){
      endShift(); 
   }   
}
document.onmousedown = function(event){
   if(event.target.getAttribute('data') == 'body'){ 
      return;
   }
   else if(event.target.getAttribute('data') == 'form'){ 
      return;
   }
   let element = event.target.parentNode.parentNode;
   console.log(element);
   if(element.getAttribute('data') == 'CapsLock'){
   caps();  
   }
   else if(element.getAttribute('data') == 'ControlLeft'){
      control();
   }
   else if(element.getAttribute('data') == 'ShiftLeft'){
      shift();
   }
   else {
      element.classList.add('active');
   }
   let point = document.querySelectorAll(`#keyboard .key`)[0];
   //console.log(point.childNodes[1]);
   if(element.getAttribute('data') == 'Space'){
      textForm.value += ` `;
    }
    else if(element.getAttribute('data') == 'Enter'){
      textForm.value += `\n`;
    }
    else if(element.getAttribute('data') == 'Tab'){
      event.preventDefault();
      textForm.value += `  `;
    }
    else if(element.getAttribute('data') == 'Backspace'){
      event.preventDefault()
     textForm.value = textForm.value.substring(0, textForm.value.length - 1);
   }
   else if(element.getAttribute('data') == 'Delete'){
      event.preventDefault()
     textForm.value = textForm.value.substring(0, textForm.value.length - 1);
   }
    else if(element.getAttribute('data') == 'AltRight' || element.getAttribute('data') == 'AltLeft' || element.getAttribute('data') == 'CapsLock' 
    || element.getAttribute('data') == 'ShiftLeft' || element.getAttribute('data') == 'ShiftRight' || element.getAttribute('data') == 'ControlLeft' || element.getAttribute('data') == 'ControlRight'){
      event.preventDefault();
    }
    else if(element.getAttribute('data') == 'ArrowUp'){
      event.preventDefault();
      textForm.value += `ᐃ`;
    }
    else if(element.getAttribute('data') == 'ArrowDown'){
      event.preventDefault();
      textForm.value += `ᐁ`;
    }
    else if(element.getAttribute('data') == 'ArrowRight'){
      event.preventDefault();
      textForm.value += `ᐅ`;
    }
    else if(element.getAttribute('data') == 'ArrowLeft'){
      event.preventDefault();
      textForm.value += `ᐊ`;
    }
   else if(point.childNodes[1].hasAttribute('hidden')){
      if(!point.childNodes[0].childNodes[0].hasAttribute('hidden')){
         textarea.value += `${element.childNodes[0].childNodes[0].innerHTML.trim()}`;
      }
      if(!point.childNodes[0].childNodes[1].hasAttribute('hidden')){
         textarea.value += `${element.childNodes[0].childNodes[1].innerHTML.trim()}`;
      }
      if(!point.childNodes[0].childNodes[2].hasAttribute('hidden')){
         textarea.value += `${element.childNodes[0].childNodes[2].innerHTML.trim()}`;
      }
   }
   else{
         if(!point.childNodes[1].childNodes[0].hasAttribute('hidden')){
            textarea.value += `${element.childNodes[1].childNodes[0].innerHTML.trim()}`;
         }
         if(!point.childNodes[1].childNodes[1].hasAttribute('hidden')){
            textarea.value += `${element.childNodes[1].childNodes[1].innerHTML.trim()}`;
         }
         if(!point.childNodes[1].childNodes[2].hasAttribute('hidden')){
            textarea.value += `${element.childNodes[1].childNodes[2].innerHTML.trim()}`;
         }
      }
   
}
document.onmouseup = function(event){
   if(event.target.getAttribute('data') == 'body'){ 
      return;
   }
   if(event.target.getAttribute('data') == 'form'){ 
      return;
   }
   let element = event.target.parentNode.parentNode;
   if(element.getAttribute('data') != 'CapsLock'){   
      element.classList.remove('active');
   }
   if(element.getAttribute('data') == 'ShiftLeft'){
      endShift();
   }
}

function caps(){
   
   document.querySelector(`#keyboard .key[data="CapsLock"]`).classList.toggle('active');
   if(document.querySelector(`#keyboard .key[data="CapsLock"]`).classList.contains('active')){
      console.log('caps1');
      if(keyRu[0].hasAttribute('hidden')){
         for(let el of capsKeyEn){
            el.removeAttribute('hidden');
         }
         for(let el of normalKeyEn){
            el.setAttribute('hidden','hidden');
         }
      }
      else{
         for(let el of capsKeyRu){
            el.removeAttribute('hidden');
         }
         for(let el of normalKeyRu){
            el.setAttribute('hidden','hidden');
         }
      }
      
   }
   else{
      if(keyRu[0].hasAttribute('hidden')){
         for(let el of capsKeyEn){
            el.setAttribute('hidden','hidden');
         }
         for(let el of normalKeyEn){
            el.removeAttribute('hidden');
         }
      }
      else{
         console.log('caps2');
         for(let el of capsKeyRu){
            el.setAttribute('hidden','hidden');
         }
         for(let el of normalKeyRu){
            el.removeAttribute('hidden');
         }
      }  
   }  
}
function control(){
   document.querySelector(`#keyboard .key[data="ControlLeft"]`).classList.add("active"); 
   for(let el of keyEn){
      if(el.hasAttribute('hidden')){
         el.removeAttribute('hidden');
      }
      else{
         el.setAttribute('hidden','hidden');
      }
   }
   for(let el of keyRu){
      if(el.hasAttribute('hidden')){
         el.removeAttribute('hidden');
      }
      else{
         el.setAttribute('hidden','hidden');
      }
   }        
}
function shift(){
   document.querySelector(`#keyboard .key[data="ShiftLeft"]`).classList.add("active"); 
      console.log(document.querySelector(`#keyboard .key[data="ShiftLeft"]`).classList);
      if(keyRu[0].hasAttribute('hidden')){
         for(let el of shiftKeyEn){
            el.removeAttribute('hidden');
         }
         for(let el of normalKeyEn){
            el.setAttribute('hidden','hidden');
         }
      }
      else{
         for(let el of shiftKeyRu){
            el.removeAttribute('hidden');
         }
         for(let el of normalKeyRu){
            el.setAttribute('hidden','hidden');
         }
         for(let el of capsShiftKeyEn){
         el.setAttribute('hidden','hidden');
      }
      for(let el of capsKeyEn){
         el.setAttribute('hidden','hidden');
      }
      }

}
function endShift(){
   if(keyRu[0].hasAttribute('hidden')){
      for(let el of shiftKeyEn){
         el.setAttribute('hidden','hidden');
      }
      for(let el of normalKeyEn){
         el.removeAttribute('hidden');
      }
      for(let el of capsShiftKeyEn){
         el.setAttribute('hidden','hidden');
      }
      for(let el of capsKeyEn){
         el.setAttribute('hidden','hidden');
      }
   }
   else{
      for(let el of shiftKeyRu){
         el.setAttribute('hidden','hidden');
      }
      for(let el of normalKeyRu){
         el.removeAttribute('hidden');
      }
      for(let el of capsShiftKeyRu){
         el.setAttribute('hidden','hidden');
      }
      for(let el of capsKeyRu){
         el.setAttribute('hidden','hidden');
      }
   } 
}
function cpsSft(){
   if(keyRu[0].hasAttribute('hidden')){
      for(let el of capsShiftKeyEn){
         el.removeAttribute('hidden');
      }
      for(let el of normalKeyEn){
         el.setAttribute('hidden','hidden');
      }
      for(let el of capsKeyEn){
         el.setAttribute('hidden','hidden');
      }
   }
   else{
      for(let el of capsShiftKeyRu){
         el.removeAttribute('hidden');
      }
      for(let el of capsKeyRu){
         el.setAttribute('hidden','hidden');
      }
      for(let el of shiftKeyRu){
         el.setAttribute('hidden','hidden');
      }
      for(let el of normalKeyRu){
         console.log('test');
         el.setAttribute('hidden','hidden');
      }
   }
}

function ctrlAlt(func, ...codes) {
   let pressed = new Set();
   document.addEventListener('keydown', function(event) {
     pressed.add(event.code);
     for (let code of codes) { // все ли клавиши из набора нажаты?
       if (!pressed.has(code)) {
         return;
       }
     }
     pressed.clear();
     func();
   });

   document.addEventListener('keyup', function(event) {
     pressed.delete(event.code);
   });
 }
 ctrlAlt(
   () => control(),
   "ControlLeft",
   "AltLeft"
 );
 function capsShift(func, ...codes) {
   let pressed = new Set();
   document.addEventListener('keydown', function(event) {
     pressed.add(event.code);
     for (let code of codes) { // все ли клавиши из набора нажаты?
       if (!pressed.has(code)) {
         return;
       }
     }
     pressed.clear();
     func();
   });

   document.addEventListener('keyup', function(event) {
     pressed.delete(event.code);
   });
 }
//  capsShift(
//    () => cpsSft(),
//    "CapsLock",
//    "ShiftLeft"
//  );