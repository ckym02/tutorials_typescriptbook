// 1. ボタンを描画する
// 2. OFFと表示されていることを確かめる
// 3. ボタンをクリックする
// 4. ONと表示されていることを確かめる

// Reactコンポーネントの描画を行うためのライブラリ
import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

// コンポーネントのある部分（テキスト）の状態を確認するテスト
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  const user = userEvent.setup();
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  // コンポーネントがどのようなテキストを持っているかのアサーションが行える
  expect(simpleButton).toHaveTextContent("OFF");
  await user.click(simpleButton);
  expect(simpleButton).toHaveTextContent("ON");
});

// スナップショットテスト
// コンポーネントの全体の状態を確認するテスト
test("描画されてすぐはOFFと表示されている", () => {
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});
