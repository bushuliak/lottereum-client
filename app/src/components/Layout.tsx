import React from 'react';
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export const Layout = (props: { children: React.JSX.Element }): React.JSX.Element => {
    return (
        <>
            <Header/>
            <Aside/>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </>
    );
};

export default Layout;
