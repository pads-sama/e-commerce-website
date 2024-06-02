import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="bg-red-300 p-2" onClick={handleCount}>
        Increment
      </button>
    </div>
  );
};

export default Home;
