export function filterItems<T>(
  items: T[],
  predicate: (item: T) => boolean,
): T[] {
  const result: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

// 動作確認：数値配列から偶数だけ取り出す
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterItems(numbers, (num) => num % 2 === 0);
console.log("偶数:", evenNumbers); // [2, 4, 6, 8, 10]

// 動作確認：文字列配列から3文字以上の単語だけ取り出す
const words = ["apple", "cat", "dog", "banana", "an", "elephant"];
const longWords = filterItems(words, (word) => word.length >= 3);
console.log("3文字以上:", longWords); // ["apple", "cat", "dog", "banana", "elephant"]
