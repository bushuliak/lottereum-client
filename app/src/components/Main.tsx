import React from 'react';

export const Main = (props: { children: React.JSX.Element }): React.JSX.Element => {
    return (
        <main>
            {props.children}
        </main>
    );
};

export default Main;
