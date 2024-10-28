// @ts-ignore
import logo from '../logo.svg';
import './FunctionsVsClass.css';
import React, {useState} from 'react';

// @ts-ignore
// function FunctionsVsClass(props) {
//   let [students, setStudents] = useState(props.students);
//   const addStudent = () => {setStudents(students+1)}  // never use students++ as it will update only half times use ++students/students+1
//   return (
//       <div>
//         <p>Current student strength is = {students}</p>
//         <button onClick={addStudent} className="button"> add student</button>
//       </div>
//   );
// }

// @ts-ignore
// const FunctionsVsClass = (props) => {
//     let [students, setStudents] = useState(props.students);
//     const addStudent = () => {
//         setStudents(++students); // never use students++ as it will update only half times use ++students/students+1
//         console.log("updated")
//     }
//     return  (
//         <div>
//             <p>Current student strength is = {students}</p>
//             <button onClick={addStudent}  className="button"> add student</button>
//         </div>
//     )
//
// }

interface FunctionsVsClassProps {

}

interface FunctionsVsClassState {
    students:number;
}

class FunctionsVsClass extends React.Component<FunctionsVsClassProps, FunctionsVsClassState> {
    constructor(props:any) {
        super(props);
        this.state = {students:0};
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent() {
        this.setState( {students : this.state.students + 1} );
    }
    render() {
        // @ts-ignore
        const {students} = this.state;
        return (
            <div>
                <p>Current student strength is = {students}</p>
                <button onClick={this.addStudent} className="button"> add student</button>
            </div>

        )
    }
}





export default FunctionsVsClass;
