
// 1. отфильтровать нечетные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = numbers.filter((el)=> el%2===0)
console.log(newNumbers);

// 2. Отфильтровать строки длинее 5 символов
const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']
const newWords = words.filter((el) => el.length > 5 )
console.log(newWords);

// 3. Оставить только строки
const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false]
const onlyStrings = mixedTypes.filter((element)=> typeof element === "string")
console.log(onlyStrings);

// 4. Офильтровать строки которые начинаются на a
const words4 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']
const newWords4 = words4.filter((element)=> element[0] ==="a")
console.log(newWords4);

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
const newWords3 = words3.filter((element)=> element.includes("e"))
console.log(words3);

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]
const newStudents = students.filter((element)=> element.grade>80)
console.log(newStudents);
// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]
const sortetDuplicates = duplicates.filter((element, index) => duplicates.indexOf(element) === index)
console.log(sortetDuplicates); 

// 2.1 Добавить восклицательный знак в конце каждого слова
const words2 = ['hello', 'world', 'javascript']
const newWords2 = words2.map((element)=> element + "!")
console.log(newWords2);
  
// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ['apple', 'banana', 'cherry']
const newWords1 = words1.map((element, index)=> `${index + 1}. ${element}`)
console.log(newWords1);

// 2.3 Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5]
const newnumbers3 = numbers3.map((element)=> element < 0 ? Math.abs(element): element)
console.log(newnumbers3);

// 2.4 Сделать каждое число строкой
const numbers4 = [5, 10, 15, 20]
const newNumbers4 = numbers4.map((element)=> `${element}`)
console.log(newNumbers4);

// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5]
const newNumbers5 = numbers5.map((element, index)=> element*index)
console.log(newNumbers5);

// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers6 = numbers6.map((element, index)=> index%3 ===0? element + 10: element)
console.log(newNumbers6);