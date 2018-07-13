pragma solidity ^0.4.24;

contract IPFSFileStorage {
    string ipfsHash;
    struct Student {
        string name;
        string phone;
        string email;
    }
    struct Address {
        string addressLine1;
        string addressLine2;
        string city;
        string state;
        string country;
    }
    struct University {
        string name;
    }

    function set(string hash) public {
        ipfsHash = hash;
    }

    function get() public view returns (string) {
        return ipfsHash;
    }
}