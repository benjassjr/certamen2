
const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"Esta seguro?", text:"No hay vuelta atras"
    , icon:"error", showCancelButton:true});
    if (resp.isConfirmed){
        
        if(await descartarLectura(id)){
            let lecturas = await getLecturas();
            cargarTabla(lecturas);
            Swal.fire("Lectura Eliminada", "Lectura eliminada exitosamente", "info");
        }else {
            Swal.fire("Error", "No se pudo realizar la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (lecturas)=>{
    let tbody = document.querySelector("#tbody-lectura");
    tbody.innerHTML = "";
    for(let i=0; i < lecturas.length; ++i){

        let tr = document.createElement("tr");
        let tipo = "";

        if(lecturas[i].tipo == "KiloWatts"){
            tipo = "kW"
        }else if(lecturas[i].tipo == "Watts"){
            tipo = "W";
        }else{
            tipo = "C";
        }
        let tdFecha = document.createElement("td");
        tdFecha.innerText = lecturas[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lecturas[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lecturas[i].medidor;
        let tdValor = document.createElement("td");
        tdValor.innerText = lecturas[i].valor + " "+ tipo;
        if(lecturas[i].tipo == "Temperatura" && lecturas[i].valor > 60){
            icono.classList.add("fas", "fas fa-fire-alt", "text-danger", "fa-3x");
        }
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText= "Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = lecturas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
        
    }
};
document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let lecturas = await getLecturas(filtro);
    cargarTabla(lecturas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    let lecturas = await getLecturas();
    cargarTabla(lecturas);
});