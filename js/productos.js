const table = document.querySelector("#table_prod")

    

const  options = {
    method: "GET",
    mode: 'cors'
}

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
            table.innerHTML +=(
                `<tr>`+ `<th scope="row"> `+(i+1)+`</th>`+
            `<td>`+arr[i].Producto+'</td>'+
            '<td>'+arr[i].Clasificacion+'</td>'+
            '<td>'+arr[i].Bodega+'</td>'+
            '<td>'+arr[i].TipodeCompra+'</td>'+
            '<td>'+arr[i].Costo+'</td>'+
            '<td>'+arr[i].Precio+'</td>'+
            '<td>'+arr[i].Procedencia+'</td>'+
            
            '</tr>'
        
            )
            
        }
    console.log(arr);
    return data
}
const resultado = Nae()