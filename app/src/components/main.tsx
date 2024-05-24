import React, {FC, JSX, ReactNode} from 'react';
import {Container} from '@mui/material';

export const Main: FC<{ children: ReactNode }> = ({children}): JSX.Element => {
    return (
        <main>
            <Container>
                {children}
            </Container>
        </main>
    );
};
