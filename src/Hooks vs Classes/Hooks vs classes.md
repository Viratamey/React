### Differentiate React Hooks vs Classes.

| React Hooks | Classes |
| --- | --- |
| It is used in functional components of React. | It is used in class-based components of React. |
| It will not require a declaration of any kind of constructor. | It is necessary to declare the constructor inside the class component. |
| It does not require the use of `this` keyword in state declaration or modification. | Keyword `this` will be used in state declaration (`this.state`) and in modification (`this.setState()`). |
| It is easier to use because of the `useState` functionality. | No specific function is available for helping us to access the state and its corresponding setState variable. |
| React Hooks can be helpful in implementing Redux and context API. | Because of the long setup of state declarations, class states are generally not preferred. |