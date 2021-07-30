
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipo = document.querySelector("#tipo-select").value.trim();

    let errores = [];
    
    if(isNaN(valor)){
        errores.push("El valor debe ser numérico");
    }else if( +valor < 0){ 
        errores.push("El valor es incorrecto");
    }else if( +valor > 500){ 
        errores.push("El valor es incorrecto");
    }
    
    if(errores.length == 0){

        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipo = tipo;
        
        let res = await crearLectura(lectura); 
        await Swal.fire("Lectura Creada", "Lectura creada satisfactoriamente", "info");
        
        window.location.href = "mediciones_existentes";
        
    } else {
        
        Swal.fire({
            title: "Errores de Validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});