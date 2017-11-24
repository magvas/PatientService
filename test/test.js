var assert = require('assert');
var model = require('./../model.js');

var getPatient = require('./../app.js').getPatient;
var remove = require('./../app.js').remove;
var app = require('./../app.js');

suite('getPatient', function() {
  test("function getPatient should return the text 'Patient'",function(){
  var expected = 'Patient';
  assert.equal(expected,getPatient());
})
});

suite('remove',function () {
    test("function 'remove' shall return 'Patient removed successful'", function () {
      var expected = "Patient removed successful";
      assert.equal(expected,remove("adkfakd"));
    })
});

suite('savePatient',function () {
    test.only("function 'savePatient' shall return 'Patient created successful'", function () {
      var expected = 'Patient created successful';

      var patient = new model.Patient('6767','Tim','Taler','m');

      assert.equal(expected,app.savePatient(patient));
    })
});