let aa = Array();
for (let i = 0; i <= 9; i++) {
 aa[i] = parseFloat((Math.random() * 50).toFixed(2));
}
let str = '';
    for (let i = 0; i <= 9; i++) {
     str += aa[i] + ' ';
    }
document.getElementById('result1_1').innerHTML = str;

let sum = 0;
let n = 0;
for (let i = 0; i < aa.length; i++) {
    sum += aa[i];
     n += 1;
    }
let avg = sum / n;
document.getElementById('result1_2').innerHTML = avg;

let dd = Array();
let sum_2=0;
let str_2 =" ";
pp=prompt("Введите количество букв в слове");
for (let i = 0; i < pp; i++) {
    dd[i] = prompt("Введите " + (i+1) + "-ую букву");
    str_2 += dd[i] + " ";
    if(dd[i]=="a" || dd[i]=="а"){ 
        sum_2+=1;
    }
}
document.getElementById('result2_1').innerHTML = str_2;
document.getElementById('result2_2').innerHTML = sum_2;

let xx = Array();
let str_3 = '';
let sum_3=0;
for (let i = 0; i < 10; i++) {
xx[i] = Math.floor(Math.random() * 2);
if(xx[i]==0){
    xx[i]="Ложь";
}
else{
    xx[i]="Истина";
    sum_3+=1;
}
str_3 += xx[i] + ' ';
}

document.getElementById('result3_1').innerHTML = str_3;

if(sum_3>5){
result="Больше 'Истина'";
}
else if(sum_3<5){
result="Больше 'Ложь'";
}
else{
result="Количество равное";
}
document.getElementById('result3_2').innerHTML = result;