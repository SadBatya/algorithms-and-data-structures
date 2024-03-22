// Алгоритм - это набор последовательных действий, которые выполняют определенную задачу

// Сложность алгоритма оценивается О(n) - где n количество операций, а О это операция

// O(n) - к примеру это линейный поиск
// O(log2n) - это бинарный поиск

const array = [1, 4, 5, 4, 6, 7, 88, 234, 32, 34, 5, 90, 10];

// 2. Алгоритм бинарного поиска
function binarySearch(array, item) {
  // создаем счетчик для подсчета количества операций
  let count = 0;
  // создаем стартовую и конечную позицию массива
  let start = 0;
  let end = array.length;

  // переменная для определения середины массива
  let middle;

  // статус найдено или не найдено число
  let found = false;

  // переменная которая будет хранить искомую позицию
  // если элемент найден то вернет его
  // если нет - вернут -1
  let position = -1;

  // цикл будет выполнятся до тех пор
  // пока одно из условий не будут верны
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor(start + end) / 2;
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  // возвращаем результат выполнения функции
  return position;
}

// сложность операции O(logn2)
console.log(binarySearch(array, 5)); // 10

// Также бинарный поиск можно реализовать и рекурсивным способом
let counter2 = 0
function recursiveBinarySearch(array, item, start, end) {
  // создаем условие при котором стартовая позиция переходит конечную позицию
  // делаем return чтобы выйти из рекурсии
  if (start > end) {
    return 
  }
  
  let middle = Math.floor((start + end) / 2);

  counter2++
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    // Рекурсивный вызов для левой половины массива
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    // Рекурсивный вызов для правой половины массива
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

// выводим в консоль результат и счетчик
// только стоит учитывать что в данной функции будет больше аргументов
// сам массив, начальное значение и длинна массива
console.log(recursiveBinarySearch(array, 12, 0, array.length))
console.log('counter2: ', counter2)