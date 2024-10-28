import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './DataContext';
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';

const SiblingDataSharingApp = () => {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<SiblingA />} />
                    <Route path="/sibling-b" element={<SiblingB />} />
                </Routes>
            </Router>
        </DataProvider>
    );
};

export default SiblingDataSharingApp;
