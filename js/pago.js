window.onload=inicio

var inputBuscar=document.getElementById("buscarSocio")
var inputNombre=document.getElementById("nombreSocio")
var inputApellido=document.getElementById("apellidoSocio")
var inputEmail=document.getElementById("emailSocio")
var inputDni=document.getElementById("buscarSocio")
var inputCategoria=document.getElementById("categoriaSocio")
var inputCuota=document.getElementById("precioSocio")
var aviso=document.getElementById("aviso")

var btnBuscar=document.getElementById("btnBuscar")
var btnPagar=document.getElementById("btnPagar")

btnPagar.disabled=true
var socio={}
var socios=[]
var index=-1

var socios=JSON.parse(localStorage.getItem("localS")) || []

function inicio(){
    btnBuscar.addEventListener("click",buscar)
    btnPagar.addEventListener("click",pagar)
}


// ----------------------------------------------------------------------

function pagar(){
    var modificado={}

    modificado.nombre = inputNombre.value
    modificado.apellido = inputApellido.value
    modificado.email = inputEmail.value
    modificado.dni = inputDni.value
    modificado.categoria = inputCategoria.value
    modificado.cuota = "Pagada"

    socios.splice(index,1,modificado)

    localStorage.setItem("localS",JSON.stringify(socios))

    aviso.innerHTML = `<h3 id="aviso">Pago Realizado!</h3>`


}



// -----------------------------------------------------------------------

function buscar(){

    var socioEncontrado=socios.find((socio)=> socio.dni === inputBuscar.value);

    if (socioEncontrado.categoria.toLowerCase() === "cadete"){
        var precio=100
    } else if (socioEncontrado.categoria.toLowerCase() === "socio"){
        var precio=200
    } else if (socioEncontrado.categoria.toLowerCase() === "adherente"){
        var precio=300
    } else if (socioEncontrado.categoria.toLowerCase() === "pleno"){
        var precio=400
    }

    index = socios.findIndex(function(socio){
        return socio.dni === inputBuscar.value
    })

    if (socioEncontrado){

        inputNombre.value=socioEncontrado.nombre
        inputApellido.value=socioEncontrado.apellido
        inputEmail.value=socioEncontrado.email
        inputCategoria.value=socioEncontrado.categoria
        inputCuota.value=precio

    }

    btnPagar.disabled=false
    
    aviso.innerHTML = `<h3 id="aviso"></h3>`


}










