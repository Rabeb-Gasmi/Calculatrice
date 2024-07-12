const value = document.querySelector('p');
const number = document.querySelectorAll('.number');
const operateur =document.querySelectorAll('.operateur');
number.forEach((num) =>{
num.addEventListener('click', () =>{
if (value.innerHTML=='0') value.innerHTML=num.innerHTML;
else {
    value.innerHTML +=num.innerHTML;
}
});
});

operateur.forEach((ope)  =>{
ope.addEventListener('click', () =>{
if(ope.id =='clear'){
    value.innerHTML=0;
}else if(ope.id == '%'){
const newValue =value.innerHTML /100;
value.innerHTML = newValue;
}else if (ope.id == '+'){
    value.innerHTML += ope.id;
}else if (ope.id == '*'){
    value.innerHTML += ope.id;
}else if (ope.id == '-'){
    value.innerHTML += ope.id;
}else if (ope.id == '/'){
    value.innerHTML += ope.id;
}
else if (ope.id == '.'){
    value.innerHTML += ope.id;
}else if (ope.id == '='){
    value.innerHTML =eval(value.innerHTML);}

});
});