export function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return `数値: ${value * 2}`;
  } else {
    return `文字列（${value.length}文字）`;
  }
}

console.log(formatValue(42)); // 数値: 84
console.log(formatValue("Hello")); // 文字列（5文字）
