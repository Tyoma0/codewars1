

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