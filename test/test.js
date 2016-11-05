var assert = require('assert');

var getPatient = require('./../app.js').getPatient;
var remove = require('./../app.js').remove;


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