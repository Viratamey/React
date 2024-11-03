import React from 'react';

// Define the type for the props of the wrapped component
interface WrappedComponentProps {
    message: string;
}

// This is our HOC
const withLogging = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) => {
    return class extends React.Component<Omit<P, keyof WrappedComponentProps>> {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} mounted`);
        }

        render() {
            return <WrappedComponent {...(this.props as P)} message="Hello, World!" />;
        }
    };
};

// Example of a simple component
const MyComponent: React.FC<WrappedComponentProps> = (props) => {
    return <div>{props.message}</div>;
};

// Enhance MyComponent with the HOC
const EnhancedComponent = withLogging(MyComponent);

// Usage
const HOC: React.FC = () => {
    return <EnhancedComponent />;
};

export default HOC;
