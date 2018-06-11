import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import '/home/abhiwin2010/dapp-ethereum/src/css/index.css'

class App extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         no_of_files: 0
      }
      if(typeof web3 != 'undefined'){
      		console.log("Using web3 detected from external source like Metamask")
      		this.web3 = new Web3(web3.currentProvider)
      }else{
      		this.web3 = new Web3(new Web3.providers.HttpProvider("http://		localhost:8545"))
      }

      const MyContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"name": "_mineth",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hash_str",
				"type": "string"
			}
		],
		"name": "upload",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "checkClientExists",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "clientInfo",
		"outputs": [
			{
				"name": "eth_amt",
				"type": "uint256"
			},
			{
				"name": "hash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "clients",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "min_eth",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "no_of_files",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_eth",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
])

  this.state.ContractInstance = MyContract.at("0x131863a0220444dd11d499e1672475360af3d4c6")
}
   }

voteNumber(number){
      console.log(number)
   }

render(){
      return (
         <div className="main-container">
            <h1>Maintain a immutable record of all your file transactions</h1>

/*<div className="block">
               <h4>Timer:</h4> &nbsp;
               <span ref="timer"> {this.state.timer}</span>
            </div>
*/
<div className="block">
               <h4>no of files:</h4> &nbsp;
               <span ref="no of files">{this.state.no_of_files}</span>
            </div>

<hr/>
label>
               <b>Enter the hash of the file you would like to upload: <input className="hash-input" ref="" type="string" placeholder={this.state.minimumBet}/></b>
               <br/>
            </label>

<h2>Upload the next File</h2>
            <ul>
               <li onClick={() => {this.voteNumber(upload)}}>upload</li>
            </ul>
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
