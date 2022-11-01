const sub = document.querySelector('.submit-btn')
console.log('hey');
console.log(sub);
// Swal.fire({
//     // position: "middle" ,
// icon: 'success',
// title: 'Se agregó tu producto correctamente',
// text: "Merki",
// timer: 1200,
// timerProgressBar: true ,
//     backdrop: `
//     rgba(36,32,32,0.65)
    
//   `,
// },Swal.clickConfirm(()=>{
//     console.log('h');
// }))

// },
// function(result){
//     if(result)
//     {
//         console.log('heyyyy');
//     }    
//     else{
//         swal({
//             text: 'Switching to Trunk',
//             timer: 1400,
//             showConfirmButton: false
//         });
//     }
// }
// );


// async function Nae(){
    // const Producto = document.getElementById('Producto').value
    // const Bodega = document.getElementById('Bodega').value
    // const Codigo = document.getElementById('Codigo').value
    // const tipoCompra = document.getElementById('tipoCompra').value
    // const Costo = document.getElementById('Costo').value
    // const Precio = document.getElementById('Precio').value
    // const Nacionalidad = document.getElementById('Nacionalidad').value
    // const Calidad = document.getElementById('Calidad').value
    // const Perecedero = document.getElementById('Perecedero').value
    // const parameter = {
    //     "TipoProducto": Producto,
    //     "Bodega": Bodega,
    //     "Codigo": Codigo,
    //     "FormaVenta": tipoCompra,
    //     "Costo": Costo,
    //     "Precio": Precio,
    //     "Nacionalidad": Nacionalidad,
    //     "Calidad": Calidad,
    //     "Perecedero": Perecedero
    // }
    // const arr = []
    // const  options = {
    //     method: "POST",
    //     mode: 'cors',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(parameter)
    
    // }
    // const response = await fetch("http://localhost:3000/products", options)
    // console.log(response);

    // const data = await response.json()
    // console.log(data[0]);
    // for (let i = 0; i < data.length; i++) {
    //     arr.push(data[i])
        
    // }
   
    //     for (let i = 0; i < data.length; i++) {
    //         table.innerHTML +=(
    //             `<tr>`+ `<th scope="row"> `+(i+1)+`</th>`+
    //         `<td>`+arr[i].Producto+'</td>'+
    //         '<td>'+arr[i].Clasificacion+'</td>'+
    //         '<td>'+arr[i].Bodega+'</td>'+
    //         '<td>'+arr[i].TipodeCompra+'</td>'+
    //         '<td>'+arr[i].Costo+'</td>'+
    //         '<td>'+arr[i].Precio+'</td>'+
    //         '<td>'+arr[i].Procedencia+'</td>'+
            
    //         '</tr>'
        
    //         )
            
    //     }
//     console.log(arr);
//     return data
// }
sub.addEventListener('click', async ()=>{
    console.log('entree');
    const Producto = document.getElementById('Producto').value
    const Bodega = document.getElementById('Bodega').value
    const Codigo = document.getElementById('Codigo').value
    const tipoCompra = document.getElementById('tipoCompra').value
    const Costo = document.getElementById('Costo').value
    const Precio = document.getElementById('Precio').value
    const Nacionalidad = document.getElementById('Nacionalidad').value
    const Calidad = document.getElementById('Calidad').value
    const Perecedero = document.getElementById('Perecedero').value
    const parameter = {
        "TipoProducto": Producto,
        "Bodega": Bodega,
        "Codigo": Codigo,
        "FormaVenta": tipoCompra,
        "Costo": Costo,
        "Precio": Precio,
        "Nacionalidad": Nacionalidad,
        "Calidad": Calidad,
        "Perecedero": Perecedero
    }
    const arr = []
    const  options = {
        method: "POST",
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameter)
    
    }
    const response = await fetch("http://localhost:5500/products", options)
    console.log(response);
    // Swal.fire(  'Good job!',  'You clicked the button!',  'success')
    Swal.fire({
        icon: 'success',
    title: 'Se agregó tu producto correctamente',
    text: "Merki",
    timer: 1200,
    timerProgressBar: true ,
        backdrop: `
        rgba(36,32,32,0.65)
        
      `,
      
    }).then(()=>{
        window.location.href = "../pages/productos.html";
    })
    
    console.log('heyyyy');
    
})