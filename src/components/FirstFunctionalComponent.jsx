// FC => just a JS function BUT it returns JSX
// Pros => VERY simple
// Cons => - ✅ stateless. => solved with useState()
//         - ✅ No Life Cycle Methods. => solved with useEffect
// Most of the cons solved by React Hooks (v16.8)

export function FirstFunctionalComponent(props) {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <h1>FirstFunctionalComponent</h1>
      <button onClick={handleClick}>CLick</button>
    </>
  );
}
