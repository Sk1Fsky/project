/* Провірка паролю та логіну*/ 

function checkLoginAndPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    var login = document.getElementById("loginBox");
    var loginText = login.value;

    if(loginText == "pablo_escobar" && passwordText == "Srakamotuka228"  )
    {
        return alert("Ласкаво просимо на форум Best Hack!");
    }
    
    
    alert("Ви ввели неправильний пароль або логін! Попробуйте ще раз або змініть пароль !");

    return false;
    
}

/* Прелоадер */ 

$(window).on('load', function () {
	$('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});



(function ($) {
    "use strict";

  
  
    /*
    [ Валідація ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*Показати пароль*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);

