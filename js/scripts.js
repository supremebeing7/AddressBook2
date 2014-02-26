var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.streetName + ", " + this.cityName + ", " + this.stateName + ", " + this.zipCode;
  },

  valid: function() {
    var valid = true;

    if (this.streetName === "") {
      alert("Invalid street");
      valid = false;
    }

    var code;
    if (this.cityName === "") {
      alert("Invalid city");
      valid = false;
    } else if (this.cityName !== undefined) {
      for (var i = 0; i < this.cityName.length; i++) {
        code = this.cityName.charCodeAt(i);
        if ((code !== 32) && (code !== 39) && (code !== 45) && (code !== 46)) {
          if ((code < 65) || ((code > 90) && (code < 97)) || (code >= 122)) {
            alert("Invalid city")
            valid = false;
          }
        }
      }; 
    }
    if (this.zipCode.length !== 5) {
      alert("Invalid zip code");
      valid = false;
    } else if (this.zipCode % 1 !== 0 && this.zipCode !== undefined) {
      alert("Invalid zip code");
      valid = false;
    }
    return valid;  
  }
};

var Phone = {
  areaCode: function() {
    return "(" + this.firstThreeNum + ")";
  },

  mainNumber: function() {
    return this.nextThreeNum + "-" + this.lastFourNum;
  },

  valid: function() {
    if ((this.firstThreeNum.length !== 3) || (this.nextThreeNum.length !== 3) || (this.lastFourNum.length !== 4)) {
      alert("Invalid phone");
      return false;
    } else if (((this.firstThreeNum % 1 !== 0) || (this.nextThreeNum % 1 !== 0) || (this.lastFourNum % 1 !== 0)) && ((this.firstThreeNum !== undefined) || (this.nextThreeNum !== undefined) || (this.lastFourNum !== undefined))) {
      alert("Invalid phone");
      return false;
    }
  } 
};


$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' + 
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<select class="form-control new-state">' +
                                    '<option value="AL">Alabama</option>' +
                                    '<option value="AK">Alaska</option>' +
                                    '<option value="AZ">Arizona</option>' +
                                    '<option value="AR">Arkansas</option>' +
                                    '<option value="CA">California</option>' +
                                    '<option value="CO">Colorado</option>' +
                                    '<option value="CT">Connecticut</option>' +
                                    '<option value="DE">Delaware</option>' +
                                    '<option value="DC">District Of Columbia</option>' +
                                    '<option value="FL">Florida</option>' +
                                    '<option value="GA">Georgia</option>' +
                                    '<option value="HI">Hawaii</option>' +
                                    '<option value="ID">Idaho</option>' +
                                    '<option value="IL">Illinois</option>' +
                                    '<option value="IN">Indiana</option>' +
                                    '<option value="IA">Iowa</option>' +
                                    '<option value="KS">Kansas</option>' +
                                    '<option value="KY">Kentucky</option>' +
                                    '<option value="LA">Louisiana</option>' +
                                    '<option value="ME">Maine</option>' +
                                    '<option value="MD">Maryland</option>' +
                                    '<option value="MA">Massachusetts</option>' +
                                    '<option value="MI">Michigan</option>' +
                                    '<option value="MN">Minnesota</option>' +
                                    '<option value="MS">Mississippi</option>' +
                                    '<option value="MO">Missouri</option>' +
                                    '<option value="MT">Montana</option>' +
                                    '<option value="NE">Nebraska</option>' +
                                    '<option value="NV">Nevada</option>' +
                                    '<option value="NH">New Hampshire</option>' +
                                    '<option value="NJ">New Jersey</option>' +
                                    '<option value="NM">New Mexico</option>' +
                                    '<option value="NY">New York</option>' +
                                    '<option value="NC">North Carolina</option>' +
                                    '<option value="ND">North Dakota</option>' +
                                    '<option value="OH">Ohio</option>' +
                                    '<option value="OK">Oklahoma</option>' +
                                    '<option value="OR">Oregon</option>' +
                                    '<option value="PA">Pennsylvania</option>' +
                                    '<option value="RI">Rhode Island</option>' +
                                    '<option value="SC">South Carolina</option>' +
                                    '<option value="SD">South Dakota</option>' +
                                    '<option value="TN">Tennessee</option>' +
                                    '<option value="TX">Texas</option>' +
                                    '<option value="UT">Utah</option>' +
                                    '<option value="VT">Vermont</option>' +
                                    '<option value="VA">Virginia</option>' +
                                    '<option value="WA">Washington</option>' +
                                    '<option value="WV">West Virginia</option>' +
                                    '<option value="WI">Wisconsin</option>' +
                                    '<option value="WY">Wyoming</option>' +
                                  '</select>' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-zip">Zip Code</label>' +
                                  '<input type="text" class="form-control new-zip">' +
                                '</div>' +
                              '</div>')
  });
  
  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone">' +
                                '<div class="form-group">' + 
                                  '<label for="new-first-three">Phone</label>' + '<br />' +
                                  '( <input type="text" class="form-control new-first-three" maxlength="3"> ) ' +
                                  '<label for="new-next-three"> </label>' +
                                  '<input type="text" class="form-control new-next-three" maxlength="3">  - ' +
                                  '<label for="new-last-four"> </label>' +
                                  '<input type="text" class="form-control new-last-four" maxlength="4">' +
                                '</div>' +
                              '</div>')
  });

  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('#new-first-name').val();
    var inputtedLastName = $('#new-last-name').val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;

    newContact.addresses = [];
    newContact.phones = [];

    $('.new-address').each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('select.new-state').val();
      var inputtedZip = $(this).find('input.new-zip').val();

      var newAddress = Object.create(Address);
      newAddress.streetName = inputtedStreet;
      newAddress.cityName = inputtedCity;
      newAddress.stateName = inputtedState;
      newAddress.zipCode = inputtedZip;

      if (newAddress.valid() !== false) {
        newContact.addresses.push(newAddress);
      };
    });
    
    $('.new-phone').each(function() {
      var inputtedFirstThreeNum = $(this).find('input.new-first-three').val();
      var inputtedNextThreeNum = $(this).find('input.new-next-three').val();
      var inputtedLastFourNum = $(this).find('input.new-last-four').val();

      var newPhone = Object.create(Phone);
      newPhone.firstThreeNum = inputtedFirstThreeNum;
      newPhone.nextThreeNum = inputtedNextThreeNum;
      newPhone.lastFourNum = inputtedLastFourNum;
      
      if (newPhone.valid() !== false) {
        newContact.phones.push(newPhone);
      };
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

      $("ul#phones").text("");
      newContact.phones.forEach(function(phone) {
        $("ul#phones").append("<li>" + phone.areaCode() + " " + phone.mainNumber() + "</li>");
      });
    });

    this.reset();
  });
});
