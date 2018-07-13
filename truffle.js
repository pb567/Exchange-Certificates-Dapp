const HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic ="drastic visa health pig finger awful head student flavor equip mad apology";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development : {
      host : "localhost",
      port : 8545, // By default Ganache runs on this port.
      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on any network
    },
    ropsten:{      
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/RbLkBm9kjrdxyP9brVBZ"), 
      network_id: 3
      
    }
  }
};
