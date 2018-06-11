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
               <h4>Last winner:</h4> &nbsp;
               <span ref="no of files">{this.state.no_of_files}</span>
            </div>

<hr/>

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
