pragma solidity 0.4.20;

contract Hashes{

	address public owner;
	

	func Hashes() public {
		owner = msg.sender;
	}

	func kill() public {
		if(msg.sender == owner) selfdestruct(owner);
	}
}