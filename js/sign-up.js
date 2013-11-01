//signup.js 
// add your JavaScript code to this file
//Jacob Grossman

$(function() {

	//Fills the State select menu.
	var i;
	var state;
	var form = $('select[name="state"]');
	for(i = 0; i <usStates.length; i++) {
		state = usStates[i];
		var option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		form.append(option);
	}//State select menu

	//Ensures a zip code is entered if an address is entered
	$('.signup-form').submit(function() {
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    	if(addr1Value != null && addr1Value.length > 0) {
    		var zipInput = signupForm.find('input[name="zip"]');
    		var zipValue = zipInput.val();
    		if(zipValue == null) {
    			alert("Please Enter a Zip Code");
    			return false;
    		} else if(zipValue.length != 5) {
    			alert("Please Enter a Valid Zip Code");
    			return false;
    		}
    	}
	});//Zip Code/Address

	//Opens confirmation if user clicks the 'No Thanks' button
	$('.cancel-signup').click(function() {
		$('.cancel-signup-modal').modal();
	})

	//Handles Confirmation box.
	//Sends user back to homepage if they wish to cancel the sign-up
	$('.btn-abandon').click(function() {
		window.location = 'http://www.google.com';
	});
	

});

