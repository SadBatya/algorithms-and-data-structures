// пузырьковая фильтрация - это один из самых известных видов сортировки
// и один из самых малоэффективных

const array = [
  4, 5, 2, 45, 6, 7, 3, 2, 5, 4, 0, 9, 56, 67, -56, 23, -456, 345, 678,
]; // Определение исходного массива для сортировки

let counter = 0;
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      counter++;
    }
  }
  return array;
}

//сложность итерации O(n2)
console.log(bubbleSort(array));
console.log(counter);
