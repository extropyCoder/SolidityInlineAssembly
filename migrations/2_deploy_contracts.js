module.exports = function(deployer) {
  deployer.deploy(MathsLibrary);
  deployer.autolink();
  deployer.deploy(SimpleContract);
};
