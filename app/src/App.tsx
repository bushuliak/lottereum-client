import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import store from '@/app/store';

export const App = (): React.JSX.Element => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
