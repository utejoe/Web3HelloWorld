document.addEventListener('DOMContentLoaded', async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Connect to your Ethereum node

    // Replace with your actual contract address and ABI
    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
    const contractABI = [
        {
            "inputs": [],
            "name": "greeting",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const myContract = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById('executeButton').addEventListener('click', async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const defaultAccount = accounts[0];

            // Execute your smart contract function here
            const result = await myContract.methods.greeting().call({ from: defaultAccount });

            console.log('Smart Contract Executed Successfully:', result);

            // Handle the success communication here, e.g., display a message
            alert('Smart Contract Executed Successfully: ' + result);
        } catch (error) {
            console.error('Error executing smart contract:', error);

            // Log the error details to the console
            console.log('Error Details:', error.details);

            // Handle the error communication here, e.g., display an error message
            alert('Error executing smart contract. Check the console for details.');
        }
    });
});
