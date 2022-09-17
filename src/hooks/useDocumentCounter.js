import { useEffect, useState } from "react";

// Our first custom hook
export function useDocumentCounter(initialVal) {
  const [count, setCount] = useState(initialVal);

  useEffect(() => {
    document.title = `${count} clicks`;
  }, [count]);

  return {
    count,
    setCount,
  };
}
