


// задание codewars



// Если дан массив целых чисел в виде строк и чисел, возвращается сумма значений массива, как если бы все они были числами.

// Верните свой ответ в виде числа.


// function sumMix(x){
//     var somme = 0;
//     for (i = 0; i<x.length; i++) {
//       somme += Number(x[i]);
//     }
//     return somme;
//   }







// При наличии массива целых чисел решение должно найти наименьшее целое число.

// Например:

// При условии, что ваше решение вернется [34, 15, 88, 2]2
// При условии, что ваше решение вернется [34, -345, -1, 100]-345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.



// function findSmallestInt(arr) {
//   let smallest = arr[0]
//   for(let element of arr){
//     if (element < smallest) {
            
//             smallest = element;
//         }
//   }
//   return smallest
//  }
// console.log(findSmallestInt([5,6,4,3,8]) )












// Я новичок в программировании и теперь хочу получить сумму двух массивов... Собственно сумма всех их элементов. Буду признателен за вашу помощь.

// P.S. Каждый массив включает в себя только целые числа. Вывод — это тоже число.




// function arrayPlusArray(arr1, arr2) {
//   let suma=0;
//   for(let i=0;i<arr1.length;i++)
//     suma+=arr1[i];
//   for(let i=0;i<arr2.length;i++)
//     suma+=arr2[i];
//   return suma;
// }













// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.




// function getAverage(marks){
//   var total = 0;
//   for(let i = 0; i < marks.length; i++){
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }


















// Завершите решение так, чтобы оно перевернуло переданную в него строку.



// function solution(str){
//   return str.split('').reverse().join('');  
// }













// Дадим вам функцию , примем 1 параметр: вот так:animalobj

// {name:"dog",legs:4,color:"white"}
// и возвращаем строку следующим образом:

// "This white dog has 4 legs."
// Когда вы закончите работу, нажмите «Запустить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код и пройти эту ката.



// function animal(obj){
//   let description = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
//   return description;
// }



















// Ваша задача состоит в том, чтобы написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей суммируются.

// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция combine должна быть хорошим гражданином, поэтому не должна мутировать входные объекты.




// function combine() {
//   let obj = {}

//   for (let i = 0; i < arguments.length; i++) {
//         for (let key in arguments[i]) {
//           obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
//         }
//   }

//   return obj;
// }














// Ваша задача состоит в том, чтобы добавить новое свойство к каждому объекту в массиве. Значение должно быть установлено в . Решение должно работать для массивов любой длины.usersAnswerquestionsusersAnswernull

// For example:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// После добавления свойства результат должен быть следующим:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// Массив уже определен для вас и не совпадает с тем, что в примере.questions


// for (i=0; i<questions.length; i++) {
//   questions[i].usersAnswer = null;
//   };




















// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить для свойства новое значение. Если свойство уже существует на объекте, то должна быть выдана ошибка.



// function addProperty(obj, prop, value) {
//   if (prop in obj) throw new Error()
//   obj[prop] = value
// }














  
  
  function countSheeps(sheep) {
    let count= 0;
    for(let i =0; i<sheep.length; i++){
      if(sheep[i] ===true ){
        count ++
               
      }   
    }
  }
  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true]));



















    // Напишите функцию, которая при получении URL-адреса в виде строки анализирует только доменное имя и возвращает его в виде строки. Например


    // function domainName(url){
    //     url = url.replace("http://", "")
    //     url = url.replace("https://", "")
    //     url = url.replace("www.", "")
        
    //     return url.split(".")[0]
    //   }
  






//     Создайте функцию, принимающую положительное целое число между и (оба включены) в качестве параметра и возвращающую строку, содержащую римское цифровое представление этого целого числа.13999

//     Современные римские цифры записываются путем выражения каждой цифры отдельно, начиная с самой левой цифры и пропуская любую цифру со значением нуля. В ряду не может быть более 3 одинаковых символов.
    
//     Римскими цифрами:
    
//     1990 визуализируется: = + = + =; в результате .1000M900CM90XCMCMXC
//     2008 записывается как =, =; или.2000MM8VIIIMMVIII
//     1666 использует каждый римский символ в порядке убывания: .

// function solution(number){
//   let rom = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
//       output = ""
//   for(let i in rom){
//     while(number>=rom[i]){
//       output += i
//       number -=rom[i]
//     }
//   }
//   return output
// }
  



// Напишите функцию, которая преобразует имя в инициалы. В этой задаче нужно ввести два слова с одним пробелом между ними.

// Выходные данные должны состоять из двух заглавных букв с точкой, разделяющей их.

// Это должно выглядеть примерно так:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
//   const parts = name.split(' ');
//     return `${parts[0][0].toUpperCase()}.${parts[1][0].toUpperCase()}`
//     // code away

// }




// Вы были в походе со своими друзьями далеко от дома, но когда приходит время возвращаться, вы понимаете, что ваше топливо на исходе, а ближайшая заправка находится в 50 милях отсюда! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Остались 2 галлоны.

// Учитывая эти факторы, напишите функцию, которая сообщает вам, возможно ли добраться до пампа или нет.

// Функция должна возвращать, true если это возможно, и false если нет.



// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   return distanceToPump <= mpg * fuelLeft;
// };



// В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
// Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

// Задание:
// - Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
// - Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

// Адреса изображений находятся в массиве WEB_TECH_IMAGE
// Первоначально отображается первое изображение из WEB_TECH_IMAGE

// 🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
// */

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

const image = document.querySelector('img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentImageIndex = 0;

function showImage() {
  image.src = WEB_TECH_IMAGES[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % WEB_TECH_IMAGES.length;
  showImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
  showImage();
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

showImage()