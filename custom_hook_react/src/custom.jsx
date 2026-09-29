import { useState } from "react";
function useCustom() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return {
    count,
    increment,
    decrement,
    reset,
  };
}
export default useCustom;
