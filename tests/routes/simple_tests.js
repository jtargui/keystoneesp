var chai = require('chai');
var expect = chai.expect;
var index = require('../../cms/routes/index');

describe('Tests esCPValido', function() {
    it("Postal Code is correct (25250 -> ''", function() {
        expect(index.esCPValido("25250")).to.equal("");
    });

    it("Postal Code is not correct (25250 -> 'No tiene 5 caracteres')", function() {
        expect(index.esCPValido("2520")).to.equal("No tiene 5 caracteres");
    });
});