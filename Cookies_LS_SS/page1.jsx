// import Cookies from "js-cookie";
// export default function Examplecookie(){

//     const Setcookie=()=>{
//         Cookies.set("token","abcde",{expires:7});
//     };

//     const Getcookie=()=>{
//        const value= Cookies.get("token");
//        alert(value);
//     };

//     const Removecookie=()=>{
//         Cookies.remove("token");
//     };

//     return(
//         <>
//         <button onClick={Setcookie}>Set Cookie</button>
//         <button onClick={Getcookie}>Get Cookie</button>
//         <button onClick={Removecookie}>Remove Cookie</button>
//         </>
//     );
// }

import { useEffect,useState } from "react";
// export default function Views(){

//     const [count,setcount]=useState(0);
//     console.log(count,"count");
//     useEffect(()=>{
//         var pageview=sessionStorage.getItem("pageview");
//         console.log(pageview,"pageview1");
        
        
//         if(pageview==null){
//             pageview=0;
//         }
       
//              var updatedcount=Number(pageview)+1;
            
       
//         sessionStorage.setItem("pageview",updatedcount);
//         setcount(updatedcount);
     
//     },[]);

//     return(
//         <>
//         <h1>Page View Count is : {count} </h1>
        
//         </>
//     );
// }




const Counter = () => {
    // State to store the count
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // Get the stored count from localStorage
      const storedCount = sessionStorage.getItem("count");
  
      // If there is a stored count, update the state with it
      if (storedCount) {
        setCount(parseInt(storedCount, 10));
      } else {
        // If there is no stored count, start with 0
        setCount(0);
      }
  
      // Increment the count by 1 and update the stored count in localStorage
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        sessionStorage.setItem("count", newCount.toString());
        return newCount;
      });
    }, []); // Empty dependency array to run the effect only once on mount
  
    return (
      <div>
        <h1>Count: {count}</h1>
      </div>
    );
  };
export default Counter;  