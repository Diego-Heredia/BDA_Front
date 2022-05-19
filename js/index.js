
var allowSubmit = false;
function capcha_filled () {
    allowSubmit = true;
}
function capcha_expired () {
    allowSubmit = false;
}
const e_cap = document.querySelector('.error_captcha')
function check_if_capcha_is_filled () {
    if(allowSubmit == true) {
        // window.location.href = "../pages/dashboard.html";
        console.log('bien');
        e_cap.innerHTML = ""
    }
    if(allowSubmit == false){
        e_cap.innerHTML = "Completa el CAPTCHA"
        // alert('Fill in the capcha!');
    }
    
}


const botonSub = document.getElementById("lleno");

const h = botonSub.addEventListener('click',()=>{
    check_if_capcha_is_filled()
})