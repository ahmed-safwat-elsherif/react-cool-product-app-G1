import { useState, useEffect } from "react";
import { useDocumentCounter } from "../hooks/useDocumentCounter";
export function FunctionalCounter() {
  const [isDark, setIsDark] = useState(false);
  //   You can add any number of states => create as much as you need of useState
  const { count, setCount } = useDocumentCounter(0);

  function handleIncrement() {
    // logic of increment
    // update the count with count + 1
    setCount(count + 1); // count = 0
    console.log({ count });
  }
  // function handleIncrementWith5() {
  //   for (let index = 0; index < 5; index++) {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  // }
  //   useEffect(() => {
  //     // any logic here will be triggered with each render of the component
  //     console.log("Counter value is changed");
  //   }, [count]); // array of dependencies

  //   useEffect(() => {
  //     console.log("isDark is changed ");
  //   }, [isDark]);

  // acts as componentDidMount() & componentDidUpdate()
  //   useEffect(() => {
  //     console.log("Counter is changed ");
  //   }, [count]);

  // acts as componentDidMount()
  useEffect(() => {
    console.log("This log appears once");
    return () => {
      // this code with execute only on destroy
      console.log("Functional Counter is destroyed 💔 ");
    };
  }, []);

  return (
    <div>
      <h3>
        Functional Component{" "}
        <span className="badge bg-primary">count: {count}</span>
      </h3>

      <button className="btn btn-primary" onClick={handleIncrement}>
        [+]
      </button>
      <button
        className={"btn btn-" + (isDark ? "light" : "dark")}
        onClick={() => setIsDark((prevIsDark) => !prevIsDark)}
      >
        {isDark ? "light" : "dark"}
      </button>
    </div>
  );
}

// setState = (params)=>{
//   // const newVirtual = createNewVirtualDOM()
//   // const updates = startVirtualDOMComparison(newVirtual)
//   // updateRealDOM(updates)
// }
