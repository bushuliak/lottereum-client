import {JSX} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {Layout} from '@/components';

export const About = (): JSX.Element => {
    return (
        <Layout>
            <Container>
                <Box>
                    <Typography variant="h6">About</Typography>
                </Box>
            </Container>
        </Layout>
    );
};
