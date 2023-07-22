import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* セルフクロージング */}
        <LikeButton />
      </header>
    </div>
  );
}

// JSXを戻り値にする関数を 関数コンポーネント という
function LikeButton() {
  const [count, setCount] = useState(999);

  const handleClick = () => {
    setCount(count + 1)
  }

  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}

export default App;
