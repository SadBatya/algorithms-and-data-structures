// Алгоритм - это набор последовательных действий, которые выполняют определенную задачу

// Сложность алгоритма оценивается О(n) - где n количество операций, а О это операция

// O(n) - к примеру это линейный поиск
// O(log2n) - это бинарный поиск


// 1. Алгоритм линейного поиска в массиве
const array = [1, 4, 5, 4, 6, 7, 88, 234, 32, 34, 5, 90, 10];
let counter = 0;
// создаем фукнцию для линейного поиска
function linearSearch(array, item) {
  // с помощью цикла будет пробегать по полученному массиву
  for (let i = 0; i < array.length; i++) {

    // создаем счетчк для подсчета количества итераций 
    counter += 1

    // и через условие каждый цикл делать сравнение
    if (array[i] === item) {

      // создаем объект, в который вкладываем результат
      // число которое ищем и индекс в массиве
      let result = {
        number: item,
        index: i,
      };

      // возвращаем результат выполнения функции
      return result;
    }
  }

  // если чисто не нашлось - возвращаем null
  return null;
}

// Сложность данного алгоритма O(n)
console.log(linearSearch(array, 90)); // { number: 90, index: 11 }