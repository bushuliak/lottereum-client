import {Context, createContext, FC, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {BrowserProvider, JsonRpcSigner} from 'ethers';

interface Web3ContextProps {
    signer: JsonRpcSigner | undefined;
    accounts: JsonRpcSigner[];
    connectWallet: () => Promise<void>;
}

export const Web3Context: Context<Web3ContextProps | undefined> = createContext<Web3ContextProps | undefined>(undefined);

export const provider: BrowserProvider = new BrowserProvider(window.ethereum);

export const Web3Provider: FC<{ children: ReactNode }> = ({children}) => {
    const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined);
    const [accounts, setAccounts] = useState<JsonRpcSigner[]>([]);

    const connectWallet = useCallback(async (): Promise<void> => {
        try {
            const signer: JsonRpcSigner = await provider.getSigner();
            const accounts: JsonRpcSigner[] = await provider.listAccounts();

            setSigner(signer);
            setAccounts(accounts);
            console.log('signer.address:', signer.address);
            console.log('accounts:', accounts.map(account => account.address).join(', '));
        } catch (error) {
        }
    }, [setAccounts, setSigner]);

    useEffect(() => {
        (async () => {
            window.ethereum.on('accountsChanged', setAccounts);

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
