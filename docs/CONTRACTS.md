# Uniswap Contracts (Replace and deploy)

## Replace contracts

- [Uniswap factory code](https://etherscan.io/address/0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f#code)
- [Uniswap router code](https://etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D#code)

> When replacing the code, you need to pay attention to the places where the prefix 0x is found, you need to save it and replace what follows it

1. Go to [Remix](https://remix.ethereum.org/)
2. Copy and replace Uniswap factory code
3. If you are not deploying the code on the mainnet you need to add the following line (~398 line) of the above source code:

```bash
bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode)); (skip for mainnet)
```

4. Go to Soliditory Compiler. Select **"Istanbul"** EVM version. Tick **"Enable optimization"** and click button **"Compile"**
5. Go to Deploy & Run Transaction and select your contract (CONTRACT tab). Set **Injected Web3** (ENVIRONMENT tab). Set your address (ACCOUNT tab)
6. Set parameter **\_feeToSetter** (who can set address for get commission) and deploy contract
7. Execute the function call **setFeeTo** to assign an address to receive fee
8. Call the value of **INIT_CODE_PAIR_HASH** and record it (need later)
9. Copy and replace Uniswap router code
10. Replace **init code hash** value with the one we got from the factory contract INIT_CODE_PAIR_HASH (~690+ line)
11. Compile router code
12. Set two parameters (deploy tab): factory address (that we just deployed) and WETH address (find in the google)
13. Take a note of the addresses of both contracts and init hash code
14. Download uniswap-interface and install dependencies
15. Replace contract addresses:

```bash
src/constants/index.ts (ROUTER_ADDRESS)
src/state/swap/hooks.ts
node_module/@uniswap/sdk/*
src/constants/abis/ (if have)
```
