// NOTE「num: number」型注釈(type annotation)
function increment(num: number) {
  return num + 1;
}

console.log(increment(999));

// tsc increment.ts でコンパイル
// コンパイラが生成した increment.js をデプロイする