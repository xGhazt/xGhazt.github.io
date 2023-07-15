window.onload=inicio

var inputBuscar=document.getElementById("buscarSocio")
var inputNombre=document.getElementById("nombreSocio")
var inputApellido=document.getElementById("apellidoSocio")
var inputEmail=document.getElementById("emailSocio")
var inputDni=document.getElementById("dniSocio")
var inputCategoria=document.getElementById("categoriaSocio")

var inputAviso=document.getElementById("aviso")
var inputCuota=document.getElementById("cuotaSocio")



var btnBuscar=document.getElementById("btnBuscar")

var btnAñadir=document.getElementById("btnAñadir")
var btnModificar=document.getElementById("btnModificar")
var btnBaja=document.getElementById("btnBaja")

var btnAnt=document.getElementById("btnAnt")
var btnLimpiar=document.getElementById("btnLimpiar")
var btnSig=document.getElementById("btnSig")


var socio={}
var socios=[]
var index=-1

var socios=JSON.parse(localStorage.getItem("localS")) || []

if (socios.length==0){
    btnAnt.disabled=true
    btnSig.disabled=true
} else if (socios.length>0){
    btnAnt.disabled=true
}

for (var n=0; n<socios.length; n++){
    var completar=socios[n]

    if(completar.cuota==="Pagada"){
        completar.acceso="Autorizado"
    } else if(completar.acceso="Denegado") { 

    }

    tablaSocios.innerHTML += `
    <tr>
        <th scope="row">${n}</th>
        <td>${completar.dni}</td>
        <td>${completar.nombre}</td>
        <td>${completar.apellido}</td>
        <td>${completar.categoria}</td>
        <td>${completar.cuota}</td>
        <td>${completar.acceso}</td>
    </tr>`

    

}

function inicio(){
    btnBuscar.addEventListener("click",buscar)

    btnAñadir.addEventListener("click",añadir)
    btnModificar.addEventListener("click",modificar)
    btnBaja.addEventListener("click",baja)

    btnAnt.addEventListener("click",anterior)
    btnSig.addEventListener("click",siguiente)
    btnLimpiar.addEventListener("click",limpiar)

}


// --------------------------------------------------

function añadir(){
    var socio={};

    socio.nombre = inputNombre.value;
    socio.apellido = inputApellido.value;
    socio.email = inputEmail.value;
    socio.dni = inputDni.value;
    socio.categoria = inputCategoria.value;
    socio.cuota = inputCuota.value

    socios.push(socio);

    localStorage.setItem("localS",JSON.stringify(socios));
 

    var nombre = inputNombre.value;
    var apellido = inputApellido.value;
    var dni = inputDni.value;
    var categoria = inputCategoria.value;
    var cuota = inputCuota.value
    

    if(cuota==="Pagada"){
        acceso="Autorizado"
    } else if(acceso="Denegado") { 

    }
    
    tablaSocios.innerHTML += `
    <tr>
        <th scope="row">${n}</th>
        <td>${dni}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${categoria}</td>
        <td>${cuota}</td>
        <td>${acceso}</td>
    </tr>`

    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";
    inputDni.value = "";
    inputCategoria.value = "";
    inputCuota.value = "";

    index=-1
    btnAnt.disabled=true
    btnSig.disabled=false
}


// --------------------------------------------------------

function anterior(){
    index--

    socio=socios[index]

    inputNombre.value = socio.nombre;
    inputApellido.value = socio.apellido;
    inputEmail.value = socio.email;
    inputDni.value = socio.dni;
    inputCategoria.value = socio.categoria;
    inputCuota.value = socio.cuota;

    btnSig.disabled=false;

    if(index==0){
        btnAnt.disabled=true
    }



}

// -----------------------------------------------------------

function siguiente(){
    index++

    socio=socios[index]

    inputNombre.value = socio.nombre;
    inputApellido.value = socio.apellido;
    inputEmail.value = socio.email;
    inputDni.value = socio.dni;
    inputCategoria.value = socio.categoria;
    inputCuota.value = socio.cuota;

    if (index>=1){
        btnAnt.disabled=false;
    } 
    
    if(index==socios.length-1){
        btnSig.disabled=true;
    
    }

}


// -----------------------------------------------------


function baja(){

    socios.splice(index,1)
    localStorage.setItem("localS", JSON.stringify(socios))
    
    inputNombre.value = ""
    inputApellido.value = ""
    inputEmail.value = ""
    inputDni.value = ""
    inputCategoria.value = ""
    inputCuota.value=""
    location.reload()


}



// ----------------------------------------------------------

function modificar(){
    var modificado={}

    modificado.nombre = inputNombre.value
    modificado.apellido = inputApellido.value
    modificado.email = inputEmail.value
    modificado.dni = inputDni.value
    modificado.categoria = inputCategoria.value
    modificado.cuota = inputCuota.value

    socios.splice(index,1,modificado)

    localStorage.setItem("localS",JSON.stringify(socios))


    inputNombre.value=""
    inputApellido.value=""
    inputEmail.value=""
    inputDni.value=""
    inputCategoria.value=""
    inputCuota.value=""
    location.reload()


}

// ---------------------------------------------------------

function buscar(){

    var socioEncontrado=socios.find((socio)=> socio.dni === inputBuscar.value);
    
    if (socioEncontrado){

        inputNombre.value=socioEncontrado.nombre
        inputApellido.value=socioEncontrado.apellido
        inputEmail.value=socioEncontrado.email
        inputDni.value=socioEncontrado.dni
        inputCategoria.value=socioEncontrado.categoria
        inputCuota.value=socioEncontrado.cuota

    }
    
    index = socios.findIndex(function(socio){
        return socio.dni === inputBuscar.value
    })
    console.log(index)



    if (index!=0){
        btnAnt.disabled=false
    } else {
        btnAnt.disabled=true
    }
    
    if (index==socios.length-1){
        btnSig.disabled=true
    }

    if (index!=socios.length-1){
        btnSig.disabled=false
    }

}

// ------------------------------------------------------


function limpiar(){
    inputNombre.value=""
    inputApellido.value=""
    inputEmail.value=""
    inputDni.value=""
    inputCategoria.value=""
    inputCuota.value=""   
}












