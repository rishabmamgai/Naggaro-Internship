$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.box').css('display', 'block')
    })

    $('i').on('click', function() {
        $('.box').css('display', 'none')
    })

    $('#submitBtn').on('click', function() {
        var checkFiled1 = checkUsername();
        var checkFiled2 = checkEmailId();
        
        if(checkFiled1 && checkFiled2) {
            $('.box' + 1).css('display', 'none');
            return true;
        }

        else
            return false;
    })

    $('#usernameValidation').hide();
    $('#emailValidation').hide();

    $('#username').keyup(function() {
        checkUsername();
    })

    $('#emailId').keyup(function() {
        checkEmailId();
    })

    function checkUsername(query, id) {
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
})
