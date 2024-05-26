import {Context, createContext, FC, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {BrowserProvider, JsonRpcSigner} from 'ethers';
import {enqueueSnackbar, VariantType} from 'notistack';

interface Web3ContextProps {
    signer: JsonRpcSigner | undefined;
    accounts: string[];
    connectWallet: () => Promise<void>;
}

export const Web3Context: Context<Web3ContextProps | undefined> = createContext<Web3ContextProps | undefined>(undefined);

export const provider: BrowserProvider = new BrowserProvider(window.ethereum);

export const Web3Provider: FC<{ children: ReactNode }> = ({children}) => {
    const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined);
    const [accounts, setAccounts] = useState<string[]>([]);

    const connectWallet = useCallback(async (): Promise<void> => {
        try {
            enqueueSnackbar('connecting wallet...', {variant: 'info' as VariantType});

            const signer: JsonRpcSigner = await provider.getSigner();
            const listAccounts: JsonRpcSigner[] = await provider.listAccounts();
            const accounts: string[] = listAccounts.map((account: JsonRpcSigner) => account.address);

            setSigner(signer);
            setAccounts(accounts);

            enqueueSnackbar(`signer address: ${signer.address}`, {variant: 'success' as VariantType});
            enqueueSnackbar(`accounts: ${accounts.join(', ')}`, {variant: 'success' as VariantType});
        } catch (error) {
            enqueueSnackbar(`error: ${error}`, {variant: 'error' as VariantType});
        } finally {
            enqueueSnackbar('finally', {variant: 'info' as VariantType});
        }
    }, [setAccounts, setSigner]);

    useEffect(() => {
        (async () => {
            window.ethereum.on('accountsChanged', async (accounts: string[]) => {
                enqueueSnackbar(`accounts changed: ${accounts.join(', ')}`, {variant: 'info' as VariantType});
                setAccounts(accounts);
            });

            await connectWallet();
        })();
    }, [connectWallet, setAccounts]);

    return (
        <Web3Context.Provider value={{signer, accounts, connectWallet}}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = (): Web3ContextProps => {
    const context: Web3ContextProps | undefined = useContext(Web3Context);

    if (!context) {
        throw new Error('useWeb3 must be used within a Web3Provider');
    }

    return context;
};
