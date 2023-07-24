let nombre = prompt("Ingrese su usuario");

if (nombre ==="usuario04") {
  alert("Binvenido usuario04");
}if(nombre ==="usuario04"){
 let respuesta = prompt("Ingrese su contraseña");
      
  if (respuesta==="33"){
    alert("Correcto")
  }else{
    alert("Incorrecto")
  } 
}else{
  alert("Usuario Incorrecto")
}



for (let turno = 1; turno <= 2; turno++) {
  let nombre = prompt("Desea un turno? Ingrese su Apellido");
  alert(`Turno #${turno} Nombre ${nombre}`);
}
alert("se acabaron los turnos");


let entrada = prompt("Ingrese su DNI");
while(entrada != "3"){
  alert(`Se ingresó ${entrada}`);
  entrada = prompt("Incorrecto. Ingrese su DNI");
}

function dato(email, telefono) {
  alert(`${email} ${telefono}`);
}

let email = prompt("Ingrese el email");
  alert(email);
let telefono = prompt("Ingrese el telefono");
  alert(telefono);
