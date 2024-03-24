import { useState } from "react";

const State = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};

export default State;
