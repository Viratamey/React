import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the props interface
interface UpdateComponentProps {
    setData: Dispatch<SetStateAction<string>>;
}

// Destructure props in the functional component
const SiblingA: React.FC<UpdateComponentProps> = ({ setData }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        setData('Hello from Sibling A');
        navigate('/sibling-b');
    };

    return (
        <div>
            <h1>Sibling A</h1>
            <button onClick={handleSubmit}>Send Data to Sibling B</button>
        </div>
    );
};

export default SiblingA;
