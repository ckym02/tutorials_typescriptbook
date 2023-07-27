// 1. ボタンを描画する
// 2. OFFと表示されていることを確かめる
// 3. ボタンをクリックする
// 4. ONと表示されていることを確かめる

import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  const user = userEvent.setup();
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  // コンポーネントがどのようなテキストを持っているかのアサーションが行える
  expect(simpleButton).toHaveTextContent("OFF");
  await user.click(simpleButton);
  expect(simpleButton).toHaveTextContent("ON");
});
