$(document).ready(function () {

    $('#usernameValidation').hide();
    $('#emailValidation').hide();
    $('#passwordValidation').hide();
    $('#confirmPasswordValidation').hide();

    $('#username').keyup(function() {
        checkUsername();
    })

    function checkUsername() {
        var username = $('#username').val();

        if(username == "") {
            $('#usernameValidation').show();
            $('#usernameValidation').html("Enter Username");
            $('#usernameValidation').css("color", "red");

            return false;
        }

        else if(username.length < 3 || username.length > 10) {
            $('#usernameValidation').show();
            $('#usernameValidation').html("Invalid Username");
            $('#usernameValidation').css("color", "red");

            return false;
        }

        $('#usernameValidation').hide();
        return true;
    }

    $('#emailId').keyup(function() {
        checkEmailId();
    })

    function checkEmailId() {
        var emailId = $('#emailId').val();
        var checkReg = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

        if(!checkReg.test(emailId)) {
            $('#emailValidation').show();
            $('#emailValidation').html("Enter valid Email ID");
            $('#emailValidation').css("color", "red");

            return false;
        }

        $('#emailValidation').hide();
        return true;
    }

    $('#password').keyup(function() {
        checkPassword();
    })

    function checkPassword() {
        var password = $('#password').val();
        var checkReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(!checkReg.test(password)) {
            $('#passwordValidation').show();
            $('#passwordValidation').html("Enter valid password");
            $('#passwordValidation').css("color", "red");

            return false;
        }
        
        $('#passwordValidation').hide();
        return true;
    }

    $('#confirmPassword').keyup(function() {
        checkConfirmPassword();
    })

    function checkConfirmPassword() {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if(password.length != confirmPassword.length) {
            $('#confirmPasswordValidation').show();
            $('#confirmPasswordValidation').html("Password didn't match");
            $('#confirmPasswordValidation').css("color", "red");

            return false;
        }
        
        $('#confirmPasswordValidation').hide();
        return true;
    }

    $('form').on('submit', function(e) {
        var checkFiled1 = checkUsername();
        var checkFiled2 = checkEmailId();
        var checkFiled3 = checkPassword();
        var checkFiled4 = checkConfirmPassword();

        if(checkFiled1 && checkFiled2 && checkFiled3 && checkFiled4)
            return true;

        else
            return false;
    });
});
