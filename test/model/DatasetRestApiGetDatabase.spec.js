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
    describe('DatasetRestApiGetDatabase', function() {
      beforeEach(function() {
        instance = new Superset.DatasetRestApiGetDatabase();
      });

      it('should create an instance of DatasetRestApiGetDatabase', function() {
        // TODO: update the code to test DatasetRestApiGetDatabase
        expect(instance).to.be.a(Superset.DatasetRestApiGetDatabase);
      });

      it('should have the property backend (base name: "backend")', function() {
        // TODO: update the code to test the property backend
        expect(instance).to.have.property('backend');
        // expect(instance.backend).to.be(expectedValueLiteral);
      });

      it('should have the property databaseName (base name: "database_name")', function() {
        // TODO: update the code to test the property databaseName
        expect(instance).to.have.property('databaseName');
        // expect(instance.databaseName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

    });
  });

}));