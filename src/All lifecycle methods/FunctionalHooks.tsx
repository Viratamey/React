import React, { useState, useEffect } from 'react';

interface DataType {
    // Define the shape of the data based on your API response
    // Example fields:
    id: number;
    name: string;
    // Add more fields as needed
}

const FunctionalHooks: React.FC = () => {
    const [data, setData] = useState<DataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('Component mounted');

        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result: DataType = await response.json(); // Ensure result matches DataType
                setData(result);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message); // Safely access error.message
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            console.log('Cleanup before unmount');
        };
    }, []); // Empty dependency array for componentDidMount behavior

    useEffect(() => {
        console.log('Component updated');
        // This effect runs when `data` or `error` changes
    }, [data, error]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div>
            <h1>Data: {data?.name}</h1> {/* Adjust based on your DataType */}
        </div>
    );
};

export default FunctionalHooks;
