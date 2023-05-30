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
    describe('DatabaseValidateParametersSchema', function() {
      beforeEach(function() {
        instance = new Superset.DatabaseValidateParametersSchema();
      });

      it('should create an instance of DatabaseValidateParametersSchema', function() {
        // TODO: update the code to test DatabaseValidateParametersSchema
        expect(instance).to.be.a(Superset.DatabaseValidateParametersSchema);
      });

      it('should have the property catalog (base name: "catalog")', function() {
        // TODO: update the code to test the property catalog
        expect(instance).to.have.property('catalog');
        // expect(instance.catalog).to.be(expectedValueLiteral);
      });

      it('should have the property configurationMethod (base name: "configuration_method")', function() {
        // TODO: update the code to test the property configurationMethod
        expect(instance).to.have.property('configurationMethod');
        // expect(instance.configurationMethod).to.be(expectedValueLiteral);
      });

      it('should have the property databaseName (base name: "database_name")', function() {
        // TODO: update the code to test the property databaseName
        expect(instance).to.have.property('databaseName');
        // expect(instance.databaseName).to.be(expectedValueLiteral);
      });

      it('should have the property driver (base name: "driver")', function() {
        // TODO: update the code to test the property driver
        expect(instance).to.have.property('driver');
        // expect(instance.driver).to.be(expectedValueLiteral);
      });

      it('should have the property engine (base name: "engine")', function() {
        // TODO: update the code to test the property engine
        expect(instance).to.have.property('engine');
        // expect(instance.engine).to.be(expectedValueLiteral);
      });

      it('should have the property extra (base name: "extra")', function() {
        // TODO: update the code to test the property extra
        expect(instance).to.have.property('extra');
        // expect(instance.extra).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property impersonateUser (base name: "impersonate_user")', function() {
        // TODO: update the code to test the property impersonateUser
        expect(instance).to.have.property('impersonateUser');
        // expect(instance.impersonateUser).to.be(expectedValueLiteral);
      });

      it('should have the property maskedEncryptedExtra (base name: "masked_encrypted_extra")', function() {
        // TODO: update the code to test the property maskedEncryptedExtra
        expect(instance).to.have.property('maskedEncryptedExtra');
        // expect(instance.maskedEncryptedExtra).to.be(expectedValueLiteral);
      });

      it('should have the property parameters (base name: "parameters")', function() {
        // TODO: update the code to test the property parameters
        expect(instance).to.have.property('parameters');
        // expect(instance.parameters).to.be(expectedValueLiteral);
      });

      it('should have the property serverCert (base name: "server_cert")', function() {
        // TODO: update the code to test the property serverCert
        expect(instance).to.have.property('serverCert');
        // expect(instance.serverCert).to.be(expectedValueLiteral);
      });

    });
  });

}));