import React, { Component } from 'react';

interface State {
    data: any; // Define more specific type if possible
    loading: boolean;
    error: string | null;
}

class ClassLifecycle extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
        console.log('Constructor: Component is being constructed');
    }

    componentWillMount() {
        console.log('componentWillMount: Component is about to mount');
    }

    static getDerivedStateFromProps(nextProps: {}, prevState: State) {
        console.log('getDerivedStateFromProps: New props received');
        return null; // Return null if no state change is needed
    }

    componentDidMount() {
        console.log('componentDidMount: Component mounted');
        fetch('/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => this.setState({ data, loading: false }))
            .catch(error => this.setState({ error: error.message, loading: false }));
    }

    shouldComponentUpdate(nextProps: {}, nextState: State) {
        console.log('shouldComponentUpdate: Deciding whether to update');
        return true; // Allow updates
    }

    getSnapshotBeforeUpdate(prevProps: {}, prevState: State) {
        console.log('getSnapshotBeforeUpdate: Capturing snapshot before update');
        return null; // Return a value for componentDidUpdate
    }

    componentDidUpdate(prevProps: {}, prevState: State, snapshot: any) {
        console.log('componentDidUpdate: Component updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Cleanup before unmount');
    }

    static getDerivedStateFromError(error: Error) {
        console.log('getDerivedStateFromError: Error occurred');
        return { error: true }; // Update state for fallback UI
    }

    componentDidCatch(error: Error, info: any) {
        console.error('componentDidCatch: An error occurred', error, info);
    }

    render() {

        const { data, loading, error } = this.state;

        if (loading) {
            return <h1>Loading...</h1>;
        }

        if (error) {
            return <h1>Error: {error}</h1>;
        }

        return (
            <div>
                <h1>Data: {data}</h1>
            </div>
        );
    }
}

export default ClassLifecycle;
