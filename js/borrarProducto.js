const table = document.querySelector("#table_prod")

    

const  options = {
    method: "GET",
    mode: 'cors'
}

async function Nae(){
    const arr = []
    console.log('Hola');
    const response = await fetch("http://localhost:5500/products", options)
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
            // '<td><i class="fas fa-tachometer-alt me-2 eliminari"><span class="bef"></span></i></td>'+
            `<td><i class="fa-solid fa-trash eliminari id="${i}tabla"></i></td>`+

            '</tr>'
        
            )
            
        }
    console.log(arr);
    const icon = document.querySelectorAll(".eliminari")
    // console.log(icon);
    // for (let i = 0; i < icon.length; i++) {
    //     const element = icon[i];
    //     console.log(element.attributes[1]);
        
    // }
    for (let u = 0; u < icon.length; u++) {
        
        icon[u].addEventListener("click", async()=>{
            console.log("Hola soy el boton "+u);
            Swal.fire({
                width: 1100,
                title: '<strong>BORRAR <p>producto</p></strong>',
                icon: 'error',
                html: `<h4>Seguro que quieres eliminar este producto?<hr>
                    <table class="table bg-white rounded table-hover">
                        <thead>
                            <tr>
                                <th scope="row" width="50">#</th>
                                <th scope="row">Producto</th>
                                <th scope="row">Clasificacion</th>
                                <th scope="row">Bodega</th>
                                <th scope="row">Tipo de Compra</th>
                                <th scope="row">Costo</th>
                                <th scope="row">Precio</th>
                                <th scope="row">Procedencia</th>
                                
                            </tr>
                        </thead>
                        <tbody id="table_prod2">
                        <tr> <th scope="row">${(u+1)}</th>
                        <td>${arr[u].Producto}</td>
                        <td>${arr[u].Clasificacion}</td>
                        <td>${arr[u].Bodega}</td>
                        <td>${arr[u].TipodeCompra}</td>
                        <td>${arr[u].Costo}</td>
                        <td>${arr[u].Precio}</td>
                        <td>${arr[u].Procedencia}</td>                        
                        '</tr>'
                        </tbody>
                    </table>
                `
                
                ,
                text: 'Something went wrong!',
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Borrar producto",
                confirmButtonColor: "#f44560"
                
              }).then(async(result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    'Borrado!',
                    `Has borrado el producto ${u+1}.`,
                    'success'
                  )
                  const  options = {
                    method: "DELETE",
                    mode: 'cors'
                    }
                    const response = await fetch(`http://localhost:5500/prod-eliminar/${u+1}`, options)
                    window.location.reload();

                } else if (
                  
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire(
                        
                        
                    'Cancelado',
                    'No se ha borrado ningun archivo :)',
                    'error',
                    
                  )
                }
              })

        })
    }
    
    return data
}

const resultado = Nae()
