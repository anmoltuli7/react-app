import React from 'react';
class About extends React.Component{
    // constructor(){
    //     super();
        
    //     //if we want to intialize the varibale before the component
    //     // console.warn("contructor are called");
    // }
    // componentDidMount()
    // {
    //     console.warn(this.props.name);
    //     //here we embeded api and api are called when the page are loaded.
    //     // console.warn("component are mounted now");
    // }
    // componentDidUpdate()
    // {
    //     console.warn("props update", this.props.name);
    //     // alert("Name are Updated");
    // }
    render(){
        return(<div>
            <h1>This is our about Component using class Component</h1>
            <h2>{this.props.name}</h2>
            
        </div>)
    }
}
export default About;

// lifecylce methods
 
// constructor()
// {

// }
// componentDidMount()
// {

// }
// componentDidUpdate()
// {

// }
// componentDidUnmount()
// {

// }