const pwdvisibility = document.querySelector('.visibility');
const pwdtype = document.querySelector('.pass input');

var password = true;
pwdvisibility.addEventListener('click', function () {
    if (password){
        pwdtype.setAttribute('type', 'text');
        pwdvisibility.innerHTML = 'visibility';
    } else {
        pwdtype.setAttribute('type', 'password'); 
        pwdvisibility.innerHTML = 'visibility_off';
    }
    password =! password;
});


function myFunction() {
    document.getElementById("myForm").submit();
   
};
