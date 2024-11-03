### Name a few techniques to optimize React app performance.

There are many ways through which one can optimize the performance of a React app, let's have a look at some of them:

-   Using useMemo( ) -
    -   It is a React hook that is used for caching CPU-Expensive functions.
    -   Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.\
        useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.
-   Using React.PureComponent -
    -   It is a base component class that checks the state and props of a component to know whether the component should be updated.
    -   Instead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders of a component unnecessarily.
-   Maintaining State Colocation -
    -   This is a process of moving the state as close to where you need it as possible.
    -   Sometimes in React app, we have a lot of unnecessary states inside the parent component which makes the code less readable and harder to maintain. Not to forget, having many states inside a single component leads to unnecessary re-renders for the component.
    -   It is better to shift states which are less valuable to the parent component, to a separate component.
-   Lazy Loading -
    -   It is a technique used to reduce the load time of a React app. Lazy loading helps reduce the risk of web app performances to a minimum.



###  How to prevent re-renders in React?

-   Reason for re-renders in React:
    -   Re-rendering of a component and its child components occur when props or the state of the component has been changed.
    -   Re-rendering components that are not updated, affects the performance of an application.
-   How to prevent re-rendering:

Consider the following components:

```
class Parent extends React.Component {
state = { messageDisplayed: false };
componentDidMount() {
  this.setState({ messageDisplayed: true });
}
render() {
  console.log("Parent is getting rendered");
  return (
    <div className="App">
      <Message />
    </div>
  );
}
}
class Message extends React.Component {
constructor(props) {
  super(props);
  this.state = { message: "Hello, this is vivek" };
}
render() {
  console.log("Message is getting rendered");
  return (
    <div>
      <p>{this.state.message}</p>
    </div>
  );
}
}
```

-   The Parent component is the parent component and the Message is the child component. Any change in the parent component will lead to re-rendering of the child component as well. To prevent the re-rendering of child components, we use the shouldComponentUpdate( ) method:

> **Note- Use shouldComponentUpdate( ) method only when you are sure that it's a static component.

```
class Message extends React.Component {
constructor(props) {
  super(props);
  this.state = { message: "Hello, this is vivek" };
}
shouldComponentUpdate() {
  console.log("Does not get rendered");
  return false;
}
render() {
  console.log("Message is getting rendered");
  return (
    <div>
      <p>{this.state.message}</p>
    </div>
  );
}
}
```

As one can see in the code above, we have returned false from the shouldComponentUpdate( ) method, which prevents the child component from re-rendering.


### Explain Strict Mode in React.

StrictMode is a tool added in version 16.3 of React to highlight potential problems in an application. It performs additional checks on the application.

```
function App() {
 return (
   <React.StrictMode>
     <div classname="App">
       <Header/>
       <div>
         Page Content
       </div>
       <Footer/>
     </div>
   </React.StrictMode>
 );
}
```

To enable StrictMode, `<React.StrictMode>` tags need to be added inside the application:

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,
rootElement
);
```

StrictMode currently helps with the following issues:

-   Identifying components with unsafe lifecycle methods: 
    -   Certain lifecycle methods are unsafe to use in asynchronous react applications. With the use of third-party libraries, it becomes difficult to ensure that certain lifecycle methods are not used.
-   StrictMode helps in providing us with a warning if any of the class components use an unsafe lifecycle method.
-   Warning about the usage of legacy string API:
    -   If one is using an older version of React, callback ref is the recommended way to manage refs instead of using the string refs. StrictMode gives a warning if we are using string refs to manage refs.
-   Warning about the usage of findDOMNode:
    -   Previously, findDOMNode( ) method was used to search the tree of a DOM node. This method is deprecated in React. Hence, the StrictMode gives us a warning about the usage of this method.
-   Warning about the usage of legacy context API (because the API is error-prone).