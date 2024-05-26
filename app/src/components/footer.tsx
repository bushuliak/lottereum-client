import {JSX} from 'react';
import {Box, Container, Typography} from '@mui/material';

export const Footer = (): JSX.Element => {
    return (
        <footer>
            <Container>
                <Box
                    sx={{
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Typography variant="body2" color="text.secondary" m={5}>
                        © {new Date().getFullYear()} {process.env.REACT_APP_NAME}
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
};
