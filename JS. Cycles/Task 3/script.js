let userPassword = '';
let currentPassword = '.';
do {
    userPassword = prompt("Введите пароль (.)");
} 
while (userPassword != currentPassword);
console.log("Поздравляю");