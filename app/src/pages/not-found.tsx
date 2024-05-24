import {JSX} from 'react';
import {Box, Container, Typography} from '@mui/material';
import {Layout} from '@/components';

export const NotFound = (): JSX.Element => {
    return (
        <Layout>
            <Container>
                <Box>
                    <Typography variant="h6">Not found</Typography>
                </Box>
            </Container>
        </Layout>
    );
};
