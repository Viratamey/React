import React, {useState} from "react";

// Controlled Components
// Definition: A controlled component is a form element whose value is controlled by React state. The component's state is the "single source of truth."
//
// How It Works: The value of the input is set via the component's state, and any changes to the input trigger an update to the state via an event handler.

// Example:
function ControlledFormValidation() {
    let [inputValue, setInputValue] = useState("");
    // @ts-ignore
    let updateInput = e => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <form>
                <input type="text" value={inputValue} onChange={updateInput} />
            </form>
        </div>
    );
}

//     Advantages:
//
//     Easier to validate and control input.
//     Better integration with React's state management.
//     Can easily manage multiple inputs and form submissions.

export default ControlledFormValidation;



// Summary
//   Controlled Components:
//     React state manages the input value.
//     Good for complex forms and validation.
//     Changes require state updates.


//   Uncontrolled Components:
//     Input maintains its own internal state.
//     Access input values via refs.
//     Simpler for quick, small forms.
//     Choosing between controlled and uncontrolled components often depends on the specific needs of your application and the complexity of the forms you're working with.
