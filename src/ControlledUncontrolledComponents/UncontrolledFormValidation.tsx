import React, {useRef} from "react";

//   Uncontrolled Components
//   Definition: An uncontrolled component is a form element that maintains its own internal state. React does not manage the input's state directly.
//
//   How It Works: You use refs to access the input value when needed (e.g., during form submission). The input's value is not directly tied to the component's state.
//
//   Example:
function UncontrolledFormValidation(props:any) {
    let inputValue = React.createRef();
    const inputRef = useRef<HTMLInputElement>(null);
    let handleSubmit = (e: any) => {
        // @ts-ignore
        alert(`Input value: ${inputRef.current.value}`);
        e.preventDefault();
    };
    // @ts-ignore
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

//     Advantages:
//
//     Simpler to implement for small forms or simple inputs.
//     Can be more performant in certain scenarios, as it doesn't involve state updates on every keystroke.


export default UncontrolledFormValidation;
