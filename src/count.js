import React,{useEffect,useState} from "react";
function Count() {
    const [count, setCount] = useState(0);
    // const [calculation, setCalculation] = useState(0);
  
    // useEffect(() => {
    //   setCalculation(() => count * 2);
    // }, [count]); 
   
    useEffect(()=>{
        // setInterval(()=>{
        //     setCount(prevCount=>prevCount+1)
        // },1000)
    },[count])
    return (
      <>
        <p>Count: {count}</p>
        {/* <button onClick={() => setCount((c)=>(c+1))}>+</button>
        <p>Calculation: {calculation}</p> */}
      </>
    );
  }
  export default Count