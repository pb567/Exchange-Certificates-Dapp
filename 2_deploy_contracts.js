var IPFSFileStorage = artifacts.require("./IPFSFileStorage.sol");

module.exports = function(deployer){
    deployer.deploy(IPFSFileStorage);
}