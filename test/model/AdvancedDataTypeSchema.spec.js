/*
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Superset);
  }
}(this, function(expect, Superset) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AdvancedDataTypeSchema', function() {
      beforeEach(function() {
        instance = new Superset.AdvancedDataTypeSchema();
      });

      it('should create an instance of AdvancedDataTypeSchema', function() {
        // TODO: update the code to test AdvancedDataTypeSchema
        expect(instance).to.be.a(Superset.AdvancedDataTypeSchema);
      });

      it('should have the property displayValue (base name: "display_value")', function() {
        // TODO: update the code to test the property displayValue
        expect(instance).to.have.property('displayValue');
        // expect(instance.displayValue).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "error_message")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property validFilterOperators (base name: "valid_filter_operators")', function() {
        // TODO: update the code to test the property validFilterOperators
        expect(instance).to.have.property('validFilterOperators');
        // expect(instance.validFilterOperators).to.be(expectedValueLiteral);
      });

      it('should have the property values (base name: "values")', function() {
        // TODO: update the code to test the property values
        expect(instance).to.have.property('values');
        // expect(instance.values).to.be(expectedValueLiteral);
      });

    });
  });

}));