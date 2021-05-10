out.innerHTML = document.cookie;
let i = 0;
var divs = [];
var types = [];
var cods = [];
var c = [];
var s = [];
var num1 = 0;
var num2 = 0;
var num3 = 0;
var cookie_document = "";
document.addEventListener("DOMContentLoaded", function(event) {
cookie_document = document.cookie;
s = cookie_document.split('; ');
while(i<s.length){
let colori = 'color'+ i;
let typei = 'type'+ i;
let codei = 'code'+ i;
let f = 0;
  while(f<s.length){
      c = s[f].split('=');
      if(c[0]==colori){
          divs[num1]=c[1];
          num1 +=1;
      }
      f++; 
  };let j=0;
  while(j<s.length){
      c = s[j].split('=');
      if(c[0]==typei){
      types[num2]=c[1];
      num2 +=1;
      }
      j++
  };let r =0;
  while(r<s.length){
      c = s[r].split('=');
      if(c[0]==codei){
      cods[num3]=c[1];
      num3 +=1;
      }
      r++;
  };
  i++
}
i=0;
while(i<divs.length){
var div = document.createElement('DIV');
div.className = 'divColor';

var spanName = document.createElement('SPAN');
spanName.textContent = divs[i];
spanName.className = 'colorsNames';
div.appendChild(spanName);

var spanType = document.createElement('SPAN');
spanType.textContent = types[i];
spanType.className = 'type_colors';
div.appendChild(spanType);
var col = types[i];

var spanCodes = document.createElement('SPAN');
spanCodes.textContent = cods[i];
spanCodes.className = 'codes';
div.appendChild(spanCodes);
var numcol = cods[i];
switch (col){
          case 'RGB':
          div.style.backgroundColor = 'rgb('+numcol+')';
          break;
          case 'RGBA':
          div.style.backgroundColor = 'rgba('+numcol+')';
          break;
          case 'HEX':
          div.style.backgroundColor = '#'+numcol;
          break;
  }
document.querySelector(".box").appendChild(div);
i++;
}
out2.innerHTML = cods;
});

let conteiner = document.querySelector(".conteiner");
let temlate_name = new RegExp ();
temlate_name = /[^\s]$/;
let temlate_RGB = new RegExp ();
temlate_RGB =/(\s*\d+\s*,){2}\s*[\d]+/;
let temlate_RGBA = new RegExp ();
temlate_RGBA=/(\s*\d+\s*,){3}[\d\.]+/;
let temlate_HEX = new RegExp ();
temlate_HEX= /[a-zA-Z0-9]{6}/;
conteiner.addEventListener("click", function(){
  var type_color = document.querySelector(".selected").value;
  var input_code = document.querySelector(".input_code");
  if(type_color==="RGB"){
          input_code.placeholder = "0-255,0-255,0-255";   
  }else if(type_color==="RGBA"){
          input_code.placeholder = "0-255,0-255,0-255,0.0";
  }else if(type_color==="HEX"){
          input_code.placeholder = "00ff00";
  }
})
function checkForm(){
  let input_code_value = document.querySelector(".input_code").value;
  type_color = document.querySelector(".selected").value;
  var name = document.querySelector(".input_name").value;
  let wrongcode = document.querySelector(".wrongcode");
  let colorsNames = document.querySelectorAll(".colorsNames");
  i=0;
  while(i<colorsNames.length){
      if(colorsNames[i].textContent == name){
          document.querySelector(".wrongname").innerHTML = "This name of color exists.";
          return false;
      }
  }
  if(!temlate_name.test(name)){
          document.querySelector(".wrongname").innerHTML = "You shoud enter just letters and numbers.";
          return false;
  };
  if(type_color==="RGB"){
          if(! temlate_RGB.test(input_code_value)){
                  wrongcode.innerHTML = "You shoud enter this way '0-255,0-255,0-255'.";
                  return false;
          }  
  }else if(type_color==="RGBA"){
          if(! temlate_RGBA.test(input_code_value)){
                  wrongcode.innerHTML = "You shoud enter this way '0-255,0-255,0-255,0.0'.";
                  return false;
          } 
  }else if(type_color==="HEX"){
          if(! temlate_HEX.test(input_code_value)){
                  wrongcode.innerHTML = "You shoud enter similar this way '00ff00'.";
                  return false;
          } 
  }else {
          return true;
  }
  let spanNameColor = document.createElement('SPAN');
  let spanTypeColor = document.createElement('SPAN');
  let spanCode = document.createElement('SPAN');
  let divColor = document.createElement('DIV');
  spanNameColor.textContent = name;
  spanTypeColor.textContent = type_color;
  spanCode.textContent = input_code_value;
  spanNameColor.className = 'colorsNames';
  spanTypeColor.className = 'type_colors';
  spanCode.className = 'codes';
  divColor.appendChild(spanNameColor);
  divColor.appendChild(spanTypeColor);
  divColor.appendChild(spanCode);
  divColor.className = 'divColor';
  document.querySelector(".box").appendChild(divColor);
  switch (type_color){
          case 'RGB':
          divColor.style.backgroundColor = 'rgb('+input_code_value+')';
          break;
          case 'RGBA':
          divColor.style.backgroundColor = 'rgba('+input_code_value+')';
          break;
          case 'HEX':
          divColor.style.backgroundColor = '#'+input_code_value;
          break;
          default: alert("Plese try again.")
  }
 let memoryDiv = document.querySelectorAll(".divColor");
  colorsNames = document.querySelectorAll(".colorsNames");
  let type_colors = document.querySelectorAll(".type_colors");
  let codes = document.querySelectorAll(".codes");
  i = 0;
  while(i<memoryDiv.length){
    document.cookie = 'color'+ i + '=' + colorsNames[i].textContent;
    document.cookie = 'type'+ i + '=' + type_colors[i].textContent;
    document.cookie = 'code'+ i + '=' + codes[i].textContent;
    i++;
  }
}