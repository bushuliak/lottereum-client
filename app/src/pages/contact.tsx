import {JSX} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {Layout} from '@/components';

export const Contact = (): JSX.Element => {
    return (
        <Layout>
            <Container>
                <Box>
                    <Typography variant="h6">Contact</Typography>
                </Box>
            </Container>
        </Layout>
    );
};
