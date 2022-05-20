const table = document.querySelector("#table_prod")
const productos = document.querySelector("#prod")
const entregas = document.querySelector("#entregas")
const inventario = document.querySelector("#inventario")
const ventas = document.querySelector("#ventas")
const compras = document.querySelector("#compras")
// ------------------------------------------------------Preload-----------------------------------
window.addEventListener('load', () => {
    const preloader = document.querySelector(".preload");
    preloader.classList.add("preload-finished");
    console.log("Que andas viendo perro del mal ヽ(ಠ_ಠ)ノ");
})
// ------------------------------------------------------Preload-----------------------------------

const  options = {
    method: "GET",
    mode: 'cors'
}


async function Nae(){
    const arr = []
    console.log('Hola');
    const response = await fetch("http://localhost:3000/products/todo/count", options)
    const data = await response.json()
    console.log(data);
    console.log(data[0][0].cuentaCompras);
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i][0])
        
    }
    console.log(arr);
    productos.innerHTML = `${arr[2].cuentaProductos}`
    entregas.innerHTML = `${arr[3].cuentaEntregas}`
    inventario.innerHTML = `${arr[1].cuentaInventario}`
    ventas.innerHTML = `${arr[4].cuentaVentas}`
    compras.innerHTML = `${arr[0].cuentaCompras}`

}
const ress = Nae()