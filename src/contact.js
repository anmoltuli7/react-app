// useEffect is a hook that use for lifecylce method for fuctional components.
// useState is a hook that provide us the functionality to use states in functional components.
import React, {  useState } from 'react';
function Contact(props){
    const [val,setVal] = useState("anmol")
    const test = (e) =>{
            console.warn("test function",e.target.value)
            setVal(e.target.value)
        }


    return(<div>
    {/* we can use html and js at he same place by using JSX(javascript xml) */}
        <h1>contact us component</h1>
        <input type = "text" value = {val} onChange={test}/>
        <button onClick = {() =>alert(val)}>
            Click me
        </button>
        
    </div>)
}
export default Contact;

//lifecycle methods and states can't be use in fuctional component. so we use hooks to get lifecycle method and states functionality