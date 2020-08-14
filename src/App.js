import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import ItemsProvider from './config/contexts/ItemsContext';

export default () => {
    return (
        <ItemsProvider>
            <Router>
                <MainLayout />
            </Router>
        </ItemsProvider>
    );
};
