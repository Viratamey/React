import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiblingA from './SiblingA';
// @ts-ignore
import SiblingB from './SiblingB';

const App = () => {
    const [data, setData] = useState('');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SiblingA setData={setData} />} />
                <Route path="/sibling-b" element={<SiblingB data={data} />} />
            </Routes>
        </Router>
    );
};

export default App;
