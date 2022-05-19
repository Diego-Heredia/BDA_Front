const table = document.querySelector("#table_prod")


const  options = {
    method: "GET",
    mode: 'cors'
}
//------------------------------------------------------Scroll-Top----------------------------------
const arriba = document.querySelector(".scroll-top");
window.addEventListener("scroll", function () {
    
    arriba.classList.toggle("arriba", window.scrollY > (document.body.scrollHeight - 3900));
    console.log(document.body.scrollHeight);
});


//------------------------------------------------------Scroll-Top----------------------------------

async function Nae(){
    const arr = []
    console.log('Hola');
    const response = await fetch("http://localhost:3000/inventario", options)
    const data = await response.json()
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i])
        
    }
   
        for (let i = 0; i < data.length; i++) {
            table.innerHTML +=(
                `<tr>`+ `<th scope="row"> `+(i+1)+`</th>`+
            `<td>`+arr[i].Producto+'</td>'+
            '<td>'+arr[i].Cantidad+'</td>'+
            
            
            
            '</tr>'
        
            )
            
        }
    console.log(arr);
    return data
}
const resultado = Nae()