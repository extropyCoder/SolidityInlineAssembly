contract('SimpleContract', function(accounts) {
    it("adds two numbers", function() {
        var simple = SimpleContract.deployed();
        return simple.addNumbers.call(1, 6).then(function(result) {
            assert.equal(result.valueOf(), 7, "maths is broken");
        });
    });
});
