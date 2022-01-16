import React from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from './pages/IndexPage';
import Template from './pages/Template';
import NoPage from './pages/NoPage';

const navElements = [
    {
        route: "/",
        name: "Index",
        element: <IndexPage />,
        isIndex: true
    }
];

export const navContext = React.createContext(navElements);

const App = () => {
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Template />}>
        {navElements.map((page) => (

            page.isIndex ? <Route index element={page.element} /> : <Route path={page.route} element={page.element} />

        ))}
        <Route path="*" element={<NoPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
    );
};

export default App;
