import React, {useState} from "react";

const CounterComponent = () => {

    let [counterValue, setCounterValue] = useState(0)
    if(counterValue>3) {
        throw new Error("crashed");
    }

    const incrementCounter= () => {
        setCounterValue(counterValue+1);
    }

    return(
        <div>
            <button onClick={incrementCounter}>Increment Value</button>
            <p>Value of counter: {counterValue}</p>
        </div>
    );


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         counterValue: 0
    //     }
    //     this.incrementCounter = this.incrementCounter.bind(this);
    // }
    // incrementCounter(){
    //     this.setState(prevState => {counterValue = prevState+1});
    // }
    // render(){
    //     if(this.state.counter === 2){
    //         throw new Error('Crashed');
    //     }
    //     return(
    //         <div>
    //             <button onClick={this.incrementCounter}>Increment Value</button>
    //             <p>Value of counter: {this.state.counterValue}</p>
    //         </div>
    //     )
    // }
}

export default CounterComponent;
