

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



