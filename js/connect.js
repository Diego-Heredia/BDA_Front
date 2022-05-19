const di = document.querySelector(".con");
const id_pro = document.querySelector("#id_prod");
const sId = document.querySelector(".serachId");

const  options = {
    method: "GET",
    // headers: {
    //     "Content-Type": "application/json"
    // },
    
    mode: 'cors'
}
// async function a (){
//     try {
//         const response = await fetch('http://localhost:3000/products',options);
//         console.log('llego')
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
    
    
        
// }
// a()

async function Nae(){
    const arr = []
    console.log('Hola');
    const response = await fetch("http://localhost:3000/products", options)
    const data = await response.json()
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i])
        
    }
   
        for (let i = 0; i < data.length; i++) {
            di.innerHTML+=(`<div>`+ `<h1>Producto `+(i+1)+`:</h1><br>`+
            `<li>Nombre: `+arr[i].Name+'</li>'+
            '<li>Descripcion: '+arr[i].Description+'</li>'+
            '<li>Cantidad: '+arr[i].Quantity+'</li>'+
            
            '</div>')
            
        }
    console.log(arr);
    return data
}
async function searchId(){
    const arr = []
    console.log('Hola');
    const id_p = id_pro.value
    try {
        const response = await fetch(`http://localhost:3000/products/${id_p}`, options)
        const data = await response.json()
        console.log(data);
        if (data.msg == 'Theres no ID matching') {
            sId.innerHTML = `<h1>No existe ningun producto con el id de ${id_p}</h1>`
            return
        }
           
        
        sId.innerHTML=(`<div>`+ `<h1>Producto `+`:</h1><br>`+
                    `<li>Nombre: `+data.Name+'</li>'+
                    '<li>Descripcion: '+data.Description+'</li>'+
                    '<li>Cantidad: '+data.Quantity+'</li>'+
                    
                    '</div>')
                    
            console.log(data);
            return data
        
    } catch (error) {
        console.log(error);
        sId.innerHTML = '<h1>No se logro hacer la peticion</h1>'
    }
    
}
const resultado = Nae()
id_pro.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        searchId()
    }
})
console.log(resultado);


// fetch("http://localhost:3000/products", options)
// .then(response=>{
//     console.log(response.json());
//     return response.text()
// })
// .then(response=>{
//     console.log(response);
// })
