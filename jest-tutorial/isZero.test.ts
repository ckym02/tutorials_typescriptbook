import { isZero } from "./isZero";
 
test("0を渡したらtrueになること", () => {
  const result = isZero(0);
  // toBeマッチャーは、JavaScriptの厳密等価比較(===)と同じ
  expect(result).toBe(true);
});

test("1を渡したらfalseになること", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
