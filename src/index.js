import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FunctionsVsClass from "./FunctionsVsClasses/FunctionsVsClass";
import CounterComponent from "./ErrorBoundary/CounterComponent";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import FormValidation from "./ControlledUncontrolledComponents/ControlledFormValidation";
import ControlledFormValidation from "./ControlledUncontrolledComponents/ControlledFormValidation";
import UncontrolledFormValidation from "./ControlledUncontrolledComponents/UncontrolledFormValidation";
// import App from "./SiblingDataSharing/Common Parent Component/App";
import ClassLifecycle from "./All lifecycle methods/ClassLifecycle";
import FunctionalHooks from "./All lifecycle methods/FunctionalHooks";
import SiblingDataSharingApp from "./SiblingDataSharing/Using Context API/SiblingDataSharingApp";
import SwitchPageComponent from "./Switching Component/SwitchPageComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use <tagname></tagname> for elements that contain content.
// Use <tagname/> (or <tagname>) for self-closing elements that do not have content.

root.render(
  <React.StrictMode>
    {
        // <FunctionsVsClass students={9}/>

        // <ErrorBoundary>
        //     <CounterComponent>
        //
        //     </CounterComponent>
        // </ErrorBoundary>

        // <ControlledFormValidation/>
        // <UncontrolledFormValidation/>

        // <SiblingDataSharingApp/>

        // <ClassLifecycle/>
        // <FunctionalHooks/>

        <SwitchPageComponent page={"contact"}/>

    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
