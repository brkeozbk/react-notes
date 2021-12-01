import { useState } from "react";

export default function File() {
  const [count, setCount] = useState(1);
  const handlePlus = (e) => {
    setCount (count + 1)
  };
  const handleset = () => {
    setCount (count - 1)
  };
  return (
    <div>
      <button onClick={handlePlus}>increase</button>
      <button onClick={handleset}> decrease</button>
      <p>{count}</p>
    </div>
  );
}
