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
    describe('DatabaseRestApiGet', function() {
      beforeEach(function() {
        instance = new Superset.DatabaseRestApiGet();
      });

      it('should create an instance of DatabaseRestApiGet', function() {
        // TODO: update the code to test DatabaseRestApiGet
        expect(instance).to.be.a(Superset.DatabaseRestApiGet);
      });

      it('should have the property allowCtas (base name: "allow_ctas")', function() {
        // TODO: update the code to test the property allowCtas
        expect(instance).to.have.property('allowCtas');
        // expect(instance.allowCtas).to.be(expectedValueLiteral);
      });

      it('should have the property allowCvas (base name: "allow_cvas")', function() {
        // TODO: update the code to test the property allowCvas
        expect(instance).to.have.property('allowCvas');
        // expect(instance.allowCvas).to.be(expectedValueLiteral);
      });

      it('should have the property allowDml (base name: "allow_dml")', function() {
        // TODO: update the code to test the property allowDml
        expect(instance).to.have.property('allowDml');
        // expect(instance.allowDml).to.be(expectedValueLiteral);
      });

      it('should have the property allowFileUpload (base name: "allow_file_upload")', function() {
        // TODO: update the code to test the property allowFileUpload
        expect(instance).to.have.property('allowFileUpload');
        // expect(instance.allowFileUpload).to.be(expectedValueLiteral);
      });

      it('should have the property allowRunAsync (base name: "allow_run_async")', function() {
        // TODO: update the code to test the property allowRunAsync
        expect(instance).to.have.property('allowRunAsync');
        // expect(instance.allowRunAsync).to.be(expectedValueLiteral);
      });

      it('should have the property backend (base name: "backend")', function() {
        // TODO: update the code to test the property backend
        expect(instance).to.have.property('backend');
        // expect(instance.backend).to.be(expectedValueLiteral);
      });

      it('should have the property cacheTimeout (base name: "cache_timeout")', function() {
        // TODO: update the code to test the property cacheTimeout
        expect(instance).to.have.property('cacheTimeout');
        // expect(instance.cacheTimeout).to.be(expectedValueLiteral);
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

      it('should have the property engineInformation (base name: "engine_information")', function() {
        // TODO: update the code to test the property engineInformation
        expect(instance).to.have.property('engineInformation');
        // expect(instance.engineInformation).to.be(expectedValueLiteral);
      });

      it('should have the property exposeInSqllab (base name: "expose_in_sqllab")', function() {
        // TODO: update the code to test the property exposeInSqllab
        expect(instance).to.have.property('exposeInSqllab');
        // expect(instance.exposeInSqllab).to.be(expectedValueLiteral);
      });

      it('should have the property forceCtasSchema (base name: "force_ctas_schema")', function() {
        // TODO: update the code to test the property forceCtasSchema
        expect(instance).to.have.property('forceCtasSchema');
        // expect(instance.forceCtasSchema).to.be(expectedValueLiteral);
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

      it('should have the property isManagedExternally (base name: "is_managed_externally")', function() {
        // TODO: update the code to test the property isManagedExternally
        expect(instance).to.have.property('isManagedExternally');
        // expect(instance.isManagedExternally).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

    });
  });

}));