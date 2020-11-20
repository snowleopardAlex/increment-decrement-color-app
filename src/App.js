import React, { Component } from "react";
import randomcolor from "randomcolor";

class App extends Component {
   constructor() {
     super() 
     this.state = {
       count: 0,
       color: ""
     }
     this.increment = this.increment.bind(this)
     this.decrement = this.decrement.bind(this)
   }

     increment() {
       this.setState(prevState => {
         return {
           count: prevState.count + 1
         }
       })
     }

     decrement() {
       this.setState(prevState => {
         return {
           count: prevState.count - 1
         }
       })
     }

     componentDidUpdate(prevProps, prevState) {
       // we have to add to prevent forever loop
       if(prevState.count !== this.state.count) {
        const newColor = randomcolor()
        this.setState({color: newColor})
       }
     }

   render() {
     return (
        <div style={{textAlign: "center"}}>
          <h1>Changing the state and the color of the number</h1>
          <h1 style={{color: this.state.color}}>{this.state.count}</h1>
          <button onClick={this.increment}>Increment!</button>
          <button onClick={this.decrement}>Decrement!</button>
        </div>
     );
   }
}

export default App;