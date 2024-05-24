import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Box, Button, Container, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import {useWeb3} from '@/providers';

export const Header = (): JSX.Element => {
    const {signer, accounts, connectWallet} = useWeb3();

    return (
        <header>
            <AppBar position="fixed">
                <Container>
                    <Toolbar>
                        <Box sx={{display: 'flex', flexGrow: 1}}>
                            <MenuItem>
                                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                                    <Typography variant="h6">
                                        {process.env.REACT_APP_NAME}
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                                    <Typography variant="body2">
                                        Home
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}>
                                    <Typography variant="body2">
                                        About
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/contact" style={{color: 'inherit', textDecoration: 'none'}}>
                                    <Typography variant="body2">
                                        Contact
                                    </Typography>
                                </Link>
                            </MenuItem>
                        </Box>
                        <Box sx={{display: 'flex', flexGrow: 1}}>
                            {signer && accounts.length ? (
                                <Tooltip title={accounts.map(account => account.address).join(', ')}>
                                    <Typography color="inherit" sx={{ml: 'auto'}}>
                                        {signer.address}
                                    </Typography>
                                </Tooltip>
                            ) : (
                                <Button color="inherit" sx={{ml: 'auto'}} onClick={connectWallet}>
                                    Connect
                                </Button>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
};
