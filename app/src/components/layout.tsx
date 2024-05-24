import {FC, JSX, ReactNode} from 'react';
import {Footer, Header, Main} from '@/components';
import {Container} from '@mui/material';

export const Layout: FC<{ children: ReactNode }> = ({children}): JSX.Element => {
    return (
        <>
            <Container>
                <Header/>
            </Container>
            <Container sx={{mt: 10}}>
                <Main>
                    {children}
                </Main>
            </Container>
            <Container sx={{mt: 5}}>
                <Footer/>
            </Container>
        </>
    );
};
