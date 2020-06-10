function result1() {
    let a = +document.querySelector("#n1_1").value;
    let b = +document.querySelector("#n1_2").value;

    if (a > b){
       result=a;
    } else if (a == b){
       result="Числа равны";
    } else{
       result=b;
    }
    document.getElementById("result1").innerHTML = result;
}

function result2() {
    let a = +document.querySelector("#n2_1").value;
    let b = +document.querySelector("#n2_2").value;
    let c = +document.querySelector("#n2_3").value;

    if (a >= b && a >= c){
       result=a;
    } else if (a == b && a == c){
        result="Числа равны";
    } else if (b >= a && b >= c){ 
        result=b;
    } else {
        result=c;
    }
    document.getElementById("result2").innerHTML = result;
}

function result3() {
    let x = +document.querySelector("#n3_1").value;
    let y = +document.querySelector("#n3_2").value;
    let result;

    if (x > 0 && y >0){
       result="Первая четверть";
    } else if (x < 0 && y >0){
        result="Вторая четверть";
    } else if (x < 0 && y < 0){
        result="Третья четверть";
    } else{
        result="Четвертая четверть";
    }
    document.getElementById("result3").innerHTML = result;
}

function result4() {
    let a = +document.querySelector("#n4_1").value;
    let b = +document.querySelector("#n4_2").value;
    let result;

    if (Number.isInteger(a) && Number.isInteger (b)){
       if (a > b){
        result=a;
       } else if (a < b){
       result=b;
       } else{
        result="0";
       }
    } else{
        result="Не целые";
    }   
    document.getElementById("result41").innerHTML = result;
    document.getElementById("result42").innerHTML = result;
}

function result5() {
    let a = +document.querySelector("#n5").value;
    let result;

    if (Number.isInteger(a)){
       if (a%2==0 ){
           if (a>=10 && a<100){
            result="Число четное и двузначное";
           } else{
             result="Число четное и недвузначное";
           }
        } else if (a>=10 && a<100){
           result="Число нечетное и двузначное";
          } else{
          result="Число нечетное и недвузначное";
          }
    } else{
        result="Не целое число";
      }   
    document.getElementById("result5").innerHTML = result;
}

function result6() {
    let a = +document.querySelector("#n6").value;
    let result;

    if (a >0){
       if (a%5==0){
           result="Число положительно и кратно 5";
       } else {
       result="Число положительно, но не кратно 5";
       } 
    } else {
        result="Число отрицательно или равно 0"
    }
    document.getElementById('result6').innerHTML = result;
}

function result7() {
    let a = +document.querySelector("#n7").value;
    let result;
    
    if (a%2==0 && a%3==0 ){
           result="Число кратно 2 и 3"
  } else 
            if (a%2==0 && a%5!=0) {
              result="Число кратно 2 и не кратно 5";
        }   else 
                if (a>0 && a<3){
                    result="Число попадает в интервал (0;3)"
             }  else 
                      if (a>=-2 && a<=0){
                         result="Число попадает в интервал [-2;0]"
                }     else {
                           result="Число не отвечает условиям";   
                }    
    document.getElementById('result7').innerHTML = result;
}

function result8() {
    let a = +document.querySelector("#n8").value;
    let result;
     
    if (a>=100 && a<=999){
        if (a%10==(a-a%100)/100){
            result="Число является полиндромом";
        } else {
        result="Число не является полиндромом";
        } 
     } else {
         result="Число не трехзначное"
    }
    document.getElementById('result8').innerHTML = result;
}

function result9() {
    let hour = +document.querySelector("#n9_1").value;
    let minute = +document.querySelector("#n9_2").value;
    let result;

       if (hour>=0 && hour<=23 && minute>=0 && minute<=60){
             if (hour>=4 && hour<=11){
                 result="Доброе утро"
            } else if (hour>11 && hour<=16){
                result="Добрый день"
               } else if (hour>16 && hour<=22) {
                   result="Добрый вечер"
               } else{
                   result="Доброй ночи";
               }   
        } else {
            result="Некорректное число"
        } 
        
    document.getElementById('result9').innerHTML = result;
}

function result10() {
    let a = +document.querySelector("#n10").value;
    let result;

    if (Number.isInteger(a)){
       if (a%10==5 || a%10==-5 || a%10==0 ){
        result="Число делится на 5 нацело";
        }   else {
            result="Число не делится на 5 нацело";
            }}
        else {
        result="Не целое число";
        }   
    document.getElementById('result10').innerHTML = result;
}

function result11() {
    let x = +document.querySelector("#n11_1").value;
    let y = +document.querySelector("#n11_2").value;
    let z = +document.querySelector("#n11_3").value;
    let a = +document.querySelector("#n11_4").value;
    let result

    if (a>0 && x>0 && y>0 && z>0){
     if(x<=a && y<=a){
        result='Кирпич пройдет';
    }
     else if (x<=a && z<=a){
        result='Кирпич пройдет';
    }
     else if (y<=a && z<=a){
        result='Кирпич пройдет';
    }
     else if ((x>a && y>a) || (x>a && z>a) || (y>a && z>a)){
        result ='Кирпич не пройдет';
    }
    } else {
        result="Параметры не могут быть отрицательными"
    }
    document.getElementById('result11').innerHTML = result;
}   

function result12() {
    let x = +document.querySelector("#n12_1").value;
    let y = +document.querySelector("#n12_2").value;
    let result

    if (x>0){
       if (x>=y){
                result=x
            } else {
                result=y
            } 
        } else if (x<y){
            result=x
        } else {
            result=y
        }  
    document.getElementById('result12').innerHTML = result;
}

function result13() {
    let x = +document.querySelector("#n13_1").value;
    let y = +document.querySelector("#n13_2").value;
    let result1;
    let result2;

    if (x>y){
            result1=x*y;
            result2=(x+y)/2;
        } else if (y>x) {
                result1=(x+y)/2;
                result2=x*y; 
        } else {
            result1=x;
            result2=y;
        }  
    document.getElementById('result13_1').innerHTML = result1;
    document.getElementById('result13_2').innerHTML = result2;
}

function result14() {
    let x = +document.querySelector("#n14_1").value;
    let y = +document.querySelector("#n14_2").value;
    let result;

    if (Number.isInteger(x)){
    if (x%2==0){
       if (x>=y){
                result=x;
            } else {
                result=y;
            } 
        }  else {
            result=(x+y)/2;
        }  
    } else {
        result="Не целое число";
      }   
    document.getElementById('result14').innerHTML = result;
}

function result15() {
    let x = +document.querySelector("#n15_1").value;
    let y = +document.querySelector("#n15_2").value;
    let result1;
    let result2;

    if (Number.isInteger(x)){
    if (x>y){
            result1=x%10;
            result2=result1%3;
        } else {
            result1=y%10;
            result2=result1%3;
        }
    } else {
        result1="Одно или оба числа не целые";
        result2="";
    }     
    document.getElementById('result15_1').innerHTML = result1;
    document.getElementById('result15_2').innerHTML = result2;
}