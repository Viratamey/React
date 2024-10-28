import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const SiblingB = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <h1>Sibling B</h1>
            <p>Data received: {data}</p>
        </div>
    );
};

export default SiblingB;
