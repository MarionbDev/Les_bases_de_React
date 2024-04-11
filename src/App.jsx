import { useState } from "react";

const App = () => {
  const [showArticle, setShowArticle] = useState(false);

  const handleClick = () => {
    setShowArticle(!showArticle);
  };

  return (
    <>
      <h1>Mini Blog</h1>
      <button
        className={`btn btn--primary ${showArticle ? "btn--danger" : ""} `}
        onClick={handleClick}
      >
        {showArticle ? "Hide Article" : "Show Article"}
      </button>
      {showArticle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam
          doloremque atque aliquid. Adipisci dolor nisi neque quae recusandae
          harum non architecto accusamus dolore doloremque. Consequuntur rerum
          mollitia quidem id!
        </p>
      )}
    </>
  );
};

export default App;
