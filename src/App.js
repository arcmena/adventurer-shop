import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

export default () => {
    return (
        <>
            <Router>
                <MainLayout />
            </Router>
        </>
    );
};
