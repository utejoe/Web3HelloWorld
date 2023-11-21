document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event triggered');

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    console.log('Web3 instance created:', web3);

    const contractAddress = '0x4815A8Ba613a3eB21A920739dE4cA7C439c7e1b1';
    console.log('Contract Address:', contractAddress);

    const contractABI = [
        {
            "inputs": [],
            "name": "getGreeting",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
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
            const result = await myContract.methods.getGreeting().call({ from: defaultAccount });

            console.log('Smart Contract Executed Successfully:', result);

            // Display the result in the alert box
            document.getElementById('resultAlert').innerHTML = `<div class="alert-success">${result}</div>`;
        } catch (error) {
            console.error('Error executing smart contract:', error);

            // Display the error in a pop-up on the webpage
            alert(`Error executing smart contract: ${error.message}`);
        }
    });
});
