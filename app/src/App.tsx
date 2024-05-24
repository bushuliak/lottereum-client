import {JSX} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Web3Provider} from '@/providers';
import {About, Contact, Home, NotFound} from '@/pages';

export const App = (): JSX.Element => {
    return (
        <Web3Provider>
            <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Web3Provider>
    );
};

export default App;
