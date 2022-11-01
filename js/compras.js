const table = document.querySelector("#table_prod")


const  options = {
    method: "GET",
    mode: 'cors'
}

async function Nae(){
    const arr = []
    console.log('Hola');
    const response = await fetch("http://localhost:5500/compras", options)
    const data = await response.json()
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i])
        
    }
   
        for (let i = 0; i < data.length; i++) {
            table.innerHTML +=(
                `<tr>`+ `<th scope="row"> `+(i+1)+`</th>`+
            `<td>`+arr[i].Cliente+'</td>'+
            '<td>'+arr[i].Producto+'</td>'+
            '<td>'+arr[i].Precio+'</td>'+
            '<td>'+arr[i].Cantidad+'</td>'+
            '<td>'+arr[i].Nacionalidad+'</td>'+
            '<td>'+arr[i].Vendedor+'</td>'+
            '<td>'+arr[i].Proveedor+'</td>'+
            '<td>'+arr[i].UbicacionProveedor+'</td>'+
            '<td>'+arr[i].FechaVenta+'</td>'+
            
            
            '</tr>'
        
            )
            
        }
    console.log(arr);
    return data
}
const resultado = Nae()