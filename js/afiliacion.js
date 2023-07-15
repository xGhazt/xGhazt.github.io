window.onload=inicio

var inputNombre=document.getElementById("nombreSocio")
var inputApellido=document.getElementById("apellidoSocio")
var inputEmail=document.getElementById("emailSocio")
var inputDni=document.getElementById("dniSocio")
var inputCategoria=document.getElementById("categoriaSocio")


var btnAñadir=document.getElementById("btnAñadir")


var socio={}
var socios=[]
var index=-1

var socios=JSON.parse(localStorage.getItem("localS")) || []


function inicio(){
    btnAñadir.addEventListener("click",registrar)
}



// -----------------------------------------------------------------

function registrar(){
    if (inputDni.value===""){
        alert("no podemos registrarlo si no completa todos los campos")
        return 
    }


    var socio={};

    socio.nombre = inputNombre.value;
    socio.apellido = inputApellido.value;
    socio.email = inputEmail.value;
    socio.dni = inputDni.value;
    socio.categoria = inputCategoria.value;
    socio.cuota = "Pendiente"

    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";
    inputDni.value = "";
    inputCategoria.value = "";
    
    socios.push(socio);

    localStorage.setItem("localS",JSON.stringify(socios));
   

}


















