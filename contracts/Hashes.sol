pragma solidity 0.4.20;

contract Hashes{

	address public owner;
	uint256 public min_eth;
	uint256 public total_eth;
	uint256 public no_of_files;
	address[] public clients;
	
	struct client {
		uint256 eth_amt;
		string hash;
	}

	function() public payable {}

	func Hashes(uint256 _mineth) public {
		owner = msg.sender;
		if(_mineth != 0) min_eth = _mineth;
	}

	func kill() public {
		if(msg.sender == owner) selfdestruct(owner);
	}

	func upload(string hash_str ) public payable {
		require(!checkClientExists(msg.sender));
		require(msg.value >= min_eth);

		clientInfo[msg.sender].eth_amt = msg.value;
		clientInfo[msg.sender].hash = hash_str;
		no_of_files++;
		total_eth += msg.value;
	}

	func checkClientExists(address client) public constant returns(bool){
		for(uint256 i = 0; i < clients.length; i++){
			if(clients[i] == client) return true;
		}
		return false;
	}

}