let tablaRegistro=[
    {nombre:"Maicoll", apellido:"Ariza", codigo:1},
    {nombre:"Ana", apellido:"Berdugo", codigo:2},
    {nombre:"Carmen", apellido:"Coronado", codigo:3}
]
function listar(){
    let cuerpoRegistro=document.getElementById("cuerpo-registro");
    let newTable="";
    for (let index = 0; index<tablaRegistro.length; index++) {
        newTable+=`<tr><td>${tablaRegistro[index].nombre}</td><td>${tablaRegistro[index].apellido}</td><td>${tablaRegistro[index].codigo}</td></tr>`;
    }
    cuerpoRegistro.innerHTML=newTable;
}
function registrar(){
    let newName=document.getElementById("name").value
    let newLastname=document.getElementById("lastname").value
    let newId=document.getElementById("id").value
    let elemento=document.getElementById("cuerpo-registro")
    var confirmar= false;
    if (newName.length==0 || newLastname.length==0 || newId==0) {
        alert("Campos vacios. Por favor asegurese de rellenar todos los campos.")
    } else{
        for (let index = 0; index < tablaRegistro.length; index++) {
            if (newId==tablaRegistro[index].codigo) {
                confirmar=true;
            }
        }
        if (confirmar==true) {
            alert("Imposible seguir con el proceso porque el Código ingresado es existente.")
        }else{
           elemento.innerHTML+=`<tr><td>${newName}</td><td>${newLastname}</td><td>${newId}</td></tr>`
           let nuevosCampos={
            nombre: newName,
            apellido: newLastname,
            codigo: newId
        }
        tablaRegistro.push(nuevosCampos)
        }
        
    }
}