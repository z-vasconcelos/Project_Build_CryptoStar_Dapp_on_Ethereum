var MyNotary = artifacts.require("StarNotary");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(MyNotary,{from: accounts[0]});
};