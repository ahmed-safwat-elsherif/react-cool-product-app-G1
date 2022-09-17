import React from "react";
import { useDocumentCounter } from "../hooks/useDocumentCounter";

export const SecondFC = () => {
  const { count, setCount } = useDocumentCounter(0);
  return (
    <div>
      <h3>
        Second Functional Component{" "}
        <span className="badge bg-primary">count: {count}</span>
      </h3>

      <button
        className="btn btn-primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        [+]
      </button>
    </div>
  );
};
