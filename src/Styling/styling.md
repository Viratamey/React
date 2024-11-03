### What are the different ways to style a React component?

There are many different ways through which one can style a React component. Some of the ways are :

-   Inline Styling: We can directly style an element using inline style attributes. Make sure the value of style is a JavaScript object:

```
class RandomComponent extends React.Component {
 render() {
   return (
     <div>
       <h3 style={{ color: "Yellow" }}>This is a heading</h3>
       <p style={{ fontSize: "32px" }}>This is a paragraph</p>
     </div>
   );
 }
}
```

-   Using JavaScript object: We can create a separate JavaScript object and set the desired style properties. This object can be used as the value of the inline style attribute.

```
class RandomComponent extends React.Component {
 paragraphStyles = {
   color: "Red",
   fontSize: "32px"
 };

 headingStyles = {
   color: "blue",
   fontSize: "48px"
 };

 render() {
   return (
     <div>
       <h3 style={this.headingStyles}>This is a heading</h3>
       <p style={this.paragraphStyles}>This is a paragraph</p>
     </div>
   );
 }
}
```

-   CSS Stylesheet: We can create a separate CSS file and write all the styles for the component inside that file. This file needs to be imported inside the component file.

```
import './RandomComponent.css';

class RandomComponent extends React.Component {
 render() {
   return (
     <div>
       <h3 className="heading">This is a heading</h3>
       <p className="paragraph">This is a paragraph</p>
     </div>
   );
 }
}
```

-   CSS Modules: We can create a separate CSS module and import this module inside our component. Create a file with ".module.css"' extension, styles.module.css:

```
.paragraph{
 color:"red";
 border:1px solid black;
}
```

We can import this file inside the component and use it:

```
import styles from  './styles.module.css';

class RandomComponent extends React.Component {
 render() {
   return (
     <div>
       <h3 className="heading">This is a heading</h3>
       <p className={styles.paragraph} >This is a paragraph</p>
     </div>
   );
 }
}
```