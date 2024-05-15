import React from 'react';
import {useSelector} from 'react-redux';
import {Box, Card, CardContent, Container, IconButton, Typography} from '@mui/material';
import Fingerprint from '@mui/icons-material/Fingerprint';
import {RootState} from '@/app/store';
import useWallet from '@/hooks/useWallet';
import Layout from '@/components/Layout';

export const Home = (): React.JSX.Element => {
    const signer = useSelector((state: RootState) => state.signer.address);
    const {address, balance, connectWallet} = useWallet();

    return (
        <Layout>
            <Container maxWidth="lg">
                <Typography variant="h6">Signer: {signer}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    {address && balance ? (
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Account: {address}</Typography>
                                <Typography variant="h6">Balance: {balance} ETH</Typography>
                            </CardContent>
                        </Card>
                    ) : (
                        <IconButton aria-label="fingerprint" color="success" onClick={connectWallet}>
                            <Fingerprint fontSize="large"/>
                        </IconButton>
                    )}
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
