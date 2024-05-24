import {JSX} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {Layout} from '@/components';

export const Home = (): JSX.Element => {
    return (
        <Layout>
            <Container>
                <Box>
                    <Typography variant="h6">Home</Typography>
                </Box>
            </Container>
        </Layout>
    );
};
