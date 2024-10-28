import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';

const SiblingA = () => {
    const { setData } = useContext(DataContext);
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
