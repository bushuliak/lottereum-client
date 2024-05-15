import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserProvider, JsonRpcSigner, formatEther} from 'ethers';
import {setAddress as setSignerAddress} from '@/features/signer/signerReducer';

const useWallet = () => {
    const dispatch = useDispatch();

    const [provider, setProvider] = useState<BrowserProvider | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    const connectWallet = useCallback(async () => {
        // @ts-ignore
        if (typeof window.ethereum !== 'undefined') {
            // @ts-ignore
            const provider = new BrowserProvider(window.ethereum);
            await provider.send('eth_requestAccounts', []);
            setProvider(provider);
        }
    }, []);

    useEffect(() => {
        if (provider) {
            (async () => {
                const signer: JsonRpcSigner = await provider.getSigner();
                const address: string = await signer.getAddress();
                const balance: string = formatEther(await provider.getBalance(address));
                setAddress(address);
                setBalance(balance);
                dispatch(setSignerAddress(address));
            })();
        }
    }, [provider]);

    return {provider, address, balance, connectWallet};
};

export default useWallet;
