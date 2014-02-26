describe('Contact', function() {
  describe('fullName', function() {
    it('takes the first and last names and concatenates with a space between', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Elvis";
      testContact.lastName = "Presley";
      testContact.fullName().should.equal("Elvis Presley");
    });
  });
});

describe('Address', function() {
  describe('fullAddress', function () {
    it('return the entire address, clearly defined', function () {
      var testAddress = Object.create(Address);
      testAddress.streetName = "567 Main Street";
      testAddress.cityName = "Anytown";
      testAddress.stateName = "USville";
      testAddress.zipCode = "45908";
      testAddress.fullAddress().should.equal("567 Main Street, Anytown, USville, 45908");
    });
  });
  describe('valid', function() {
    it('return false if zip is invalid', function() {
      var testAddress = Object.create(Address);
      testAddress.zipCode = "dfgfd";
      testAddress.valid().should.equal(false);
    });

    it('return false if city is invalid', function() {
      var testAddress = Object.create(Address);
      testAddress.cityName = "456";
      testAddress.valid().should.equal(false);
    });
  });
});

describe('Phone', function() {
  describe('areaCode', function() {
    it('returns the area code in parentheses', function() {
      var testPhone = Object.create(Phone);
      testPhone.firstThreeNum = "503";
      testPhone.areaCode().should.equal("(503)");
    });
  });

  describe('mainNumber', function () {
    it('returns the main 7 digits with a "-"', function() {
      var testPhone = Object.create(Phone);
      testPhone.nextThreeNum = "354";
      testPhone.lastFourNum = "9094"
      testPhone.mainNumber().should.equal("354-9094");
    });
  });
  describe('valid', function () {
    it('returns false if area code is invalid', function (){
      var testPhone = Object.create(Phone);
      testPhone.firstThreeNum = "3b4"
      testPhone.valid().should.equal(false);
    })

    it('returns false if middle 3 numbers are invalid', function() {
      var testPhone = Object.create(Phone);
      testPhone.nextThreeNum = "bo9"
      testPhone.valid().should.equal(false);
    });

    it('returns false if last 4 numbers are invalid', function() {
      var testPhone = Object.create(Phone);
      testPhone.lastFourNum = "bvvd"
      testPhone.valid().should.equal(false);
    });
  });
});
