describe("All test", function () {
    beforeEach(function () {
        // Nothing to do
    });

    importTest("simple_tests", './routes/simple_tests.js');

    after(function () {
        //nothing to do
    });
});

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}