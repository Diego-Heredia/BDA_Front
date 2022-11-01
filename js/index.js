
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
        console.log('bien');
        e_cap.innerHTML = ""
        return 'Todo bien'
        // window.location.href = "../pages/dashboard.html";
    }
    if(allowSubmit == false){
        e_cap.innerHTML = "Completa el CAPTCHA"
        // alert('Fill in the capcha!');
    }
    
}




const  options = {
    method: "GET",
    mode: 'cors'
}
const usuarios = []
const contraseñas = []
const inputUsers = document.getElementById('username')
const inputPass = document.getElementById('password')

async function Nae(){
    console.log('Hola');
    const response = await fetch("http://localhost:5500/usuarios", options)
    const data = await response.json()
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        usuarios.push(data[i].Usuario)
        contraseñas.push(data[i].Password)
    }
    
    
    console.log(usuarios);
    console.log(contraseñas);
    return data
}
const resultado = Nae()
//Fetch a api
// var api = "http://localhost:3000/usuarios"
// Por un metodos get, recibes un JSON, le haces un for por cada dato que hay en el json haces el push a un arreglo, 
// que uno sea usuarios y otro contraseñas y dentro de otro for comparas el resultado dado con el input de la pagina
// eso lo haces con un document.querySelector y un value, verificas y si si coinciden haces un window.location.href = "../pages/dashboard.html";
const botonSub = document.getElementById("lleno");

    const user = ''
    const Pass = ''

const h = botonSub.addEventListener('click',()=>{
    const check = check_if_capcha_is_filled()
    // console.log(check)
    const valUser = inputUsers.value
    const valPass = inputPass.value
    const user = valUser
    const Pass = valPass
    console.log(valUser);
    
    if (check == 'Todo bien') {
        
        for (let o = 0; o < usuarios.length; o++) {
            if (usuarios[o] == valUser && contraseñas[o]== valPass) {
                console.log('Validacion hecha');
                e_cap.innerHTML = ''
                window.location.href = "../pages/dashboard.html";
            }
            
        }
    }
    
        console.log('No se encontro');
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            
          })
          
          Toast.fire({
            icon: 'error',
            title: 'El nombre de usuario o contraseña es incorrecto'
          })
        e_cap.innerHTML = 'El nombre de usuario o contraseña es incorrecto'
    
    
})
// export  {user,Pass}
