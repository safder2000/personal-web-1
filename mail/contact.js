var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var txtError = document.getElementById('Txt-error')
var msgError = document.getElementById('msg-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length ==0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
}
nameError.innerHTML = ' ';
return true;
}

// function validatePhone() {
//     var phone = document.getElementById('contact-phone').value;
    
//     if(phone.length==0) {
//         phoneError.innerHTML = 'Phone no is required';
//         return false;
//     }
//     if(phone.length !== 10){
//         phoneError.innerHTML = 'Phone no should be 10 digits';
//         return false;
//     }
//     if(!phone.match(/^[0-9]{10}$/)){    
//        phoneError.innerHTML = 'Phone no is required';
//        return false;
//     }
//       return true;
//     }

    function validateEmail(){
       var email = document.getElementById('contact-email').value;
       if(email.length== 0){
        emailError.innerHTML = 'Email is required'
        return false;
       }
        
       if(!email.match(/^[A-Za-z\.|\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
          emailError.innerHTML = 'Email Invalid'
        return false;
       }
       emailError.innerHTML = '';
    return true;
    }
    
    function validateTxt(){
        var subTxt = document.getElementById('subject-txt').value;
        if(subTxt.length== 0){
            txtError.innerHTML = 'enter a subject'
            return false;
           }
           txtError.innerHTML = '';
           return true;
           
    }
    function validateMsg(){
        var msgTxt = document.getElementById('msg-txt').value;
        if(msgTxt.length== 0){
            msgError.innerHTML = 'enter the messege'
            return false;
           }
           if(msgTxt.length < 10){
            msgError.innerHTML = 'enter minimum of 10 characters';
          return false;
   }
           msgError.innerHTML = '';
           return true;
           
           
    }
function validateForm(){
if(!validateName() || !validateTxt() || !validateEmail() || !validateMsg()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){submitError.style.display = 'none'; }, 3000);
return false;
}
}