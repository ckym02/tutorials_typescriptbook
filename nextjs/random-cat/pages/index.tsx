import { NextPage } from "next";
import { useEffect, useState } from "react";

type Image = {
  url: string;
};

// 型ガード関数
const isImage = (value: unknown): value is Image => {
  // 値がオブジェクトなのか？
  if (!value || typeof value !== "object") {
    return false;
  }

  // urlプロパティが存在し、かつ、それが文字列なのか？
  return "url" in value && typeof value.url === "string";
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images: unknown = await res.json();

  // 配列として表現されているか？
  if (!Array.isArray(images)) {
    throw new Error("猫の画像が取得できませんでした");
  }

  const image: unknown = images[0];
  // Imageの構造をなしているか？
  if (!isImage(image)) {
    throw new Error("猫の画像が取得できませんでした");
  }

  return image;
};

// NOTE: NextPageはページコンポーネントを表す型
// ページコンポーネントの要件を満たしているかがチェックする
const IndexPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchImage().then((image) => {
      setImageUrl(image.url)
      setLoading(false)
    })
  }, [])

  // 読み込み中は前の画像が表示されたまま
  // const handleClick = () => {
  //   fetchImage().then((image) => {
  //     setImageUrl(image.url)
  //   })
  // }

  // チュートリアルのほう（読み込み中は画面に何も表示されない）
  const handleClick = async () => {
    setLoading(true); // 読込中フラグを立てる
    const newImage = await fetchImage();
    setImageUrl(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // 読込中フラグを倒す
  }

  return (
    <div>
      <button onClick={handleClick}>他のネコも見る</button>
      <div>{loading || <img src={imageUrl} />}</div>
    </div>
  )
}

export default IndexPage;
