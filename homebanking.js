//Declaración de variables
var nombreUsuario = "Sebastian Ferrer";

var saldoCuenta = 20000; 

var limiteExtraccion = 5000; 

var password = 1234;

var valor;  

//Creación de funciones
function suma(valor) {
    saldoCuenta = saldoCuenta + valor;
}

function resta(valor) {
    saldoCuenta = saldoCuenta - valor;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt("¿Ingrese el nuevo límite de extracción?"));
 
  if (isNaN(nuevoLimite) || (nuevoLimite < 1)){
    alert("El valor ingresado no corresponde.");
}
else {
     (limiteExtraccion = nuevoLimite)
     actualizarLimiteEnPantalla();
     alert("Su nuevo límite de extracción es: $" + nuevoLimite);
    }  
}


function extraerDinero() {
  var cantidadAextraer = parseInt(prompt("¿Que cantidad de dinero desea extraer?"));
  var saldoAntes = saldoCuenta;
    if (cantidadAextraer > saldoCuenta) {
      alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero.");
    }else if (cantidadAextraer % 100) {
      alert("Solo puede extraer billetes de 100.");
      return;
    }else if (cantidadAextraer > limiteExtraccion) {
          alert("La cantidad de dinero que desea extraer es mayor a su limite de extracción.");
          return; 
    }else if (cantidadAextraer < 1){
      alert("El valor ingresado no corresponde.");
      return;
    }else if (isNaN(cantidadAextraer)){
            alert("El valor ingresado no corresponde.");
            return;
    }else(cantidadAextraer < saldoCuenta) 
       resta(cantidadAextraer);
       actualizarSaldoEnPantalla(); 
       alert("Has retirado: $" + cantidadAextraer + "\nSaldo anterior: $" + saldoAntes + "\nSu saldo actual es: $" + saldoCuenta);
      }

      function depositarDinero() {
        var cantidadDeDinero = parseInt(prompt("¿Que cantidad de dinero desea depositar?"));
        var saldoAnterior = saldoCuenta;
            if (isNaN(cantidadDeDinero)) {
             return;
           }else if (cantidadDeDinero < 1){
            alert("El valor ingresado no corresponde.");
            return;
          }
           else{    function suma(cantidadDeDinero) {
            saldoCuenta = saldoAnterior + cantidadDeDinero;}}
             suma(cantidadDeDinero);
             actualizarSaldoEnPantalla(); 
             alert("Has depositado: $" + cantidadDeDinero + "\nSaldo anterior: $" + saldoAnterior + "\nSu saldo actual es: $" + saldoCuenta)
    }


function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var servicio;
    var opcion;
   
   var opcion = parseInt(prompt("¿Ingrese el número que corresponda con el servicio que desea pagar?" + "\n1- " + "Agua" + "\n2- " + "Telefono" + "\n3- " + "Luz" + "\n4- " + "Internet"));
    
    function resta(servicio) {
      (saldoCuenta = saldoCuenta - servicio);
}       
    switch (opcion) {
      case 1: 
       agua = 350;
        if (saldoCuenta > agua){
          alert("Has pagado el servicio Agua." + "\nSaldo descontado: $" + agua + "\nSaldo anterior: $" + saldoCuenta + "\nSu saldo actual es: $" + (saldoCuenta-agua))
          resta(350);
          actualizarSaldoEnPantalla();
        }else {
          alert("No hay saldo suficiente para pagar este servicio."); 
        }
        break;
      case 2:
       telefono = 425;
        if (saldoCuenta > telefono){
          alert("Has pagado el servicio Teléfono." + "\nSaldo descontado: $" + telefono + "\nSaldo anterior: $" + saldoCuenta + "\nSu saldo actual es: $" + (saldoCuenta-telefono))
          resta(425); 
          actualizarSaldoEnPantalla();}
        else {
          alert("No hay saldo suficiente para pagar este servicio.");
        } 
         break;
      case 3:
       luz = 210;
        if (saldoCuenta > luz){
         alert("Has pagado el servicio Luz." + "\nSaldo descontado: $" + luz + "\nSaldo anterior: $" + saldoCuenta + "\nSu saldo actual es: $" + (saldoCuenta-luz))
         resta(210);
         actualizarSaldoEnPantalla();
        }else {
         alert("No hay saldo suficiente para pagar este servicio.")
        }
         break;
      case 4:
       internet = 570;
        if (saldoCuenta > internet){
         alert("Has pagado el servicio Internet." + "\nSaldo descontado: $" + internet + "\nSaldo anterior: $" + saldoCuenta + "\nSu saldo actual es: $" + (saldoCuenta-internet))
         resta(570);
         actualizarSaldoEnPantalla();}
        else {
         alert("No hay saldo suficiente para pagar este servicio.")
        }
         break;
        default:
         alert("El servicio que desea pagar no existe.");
        }     
}             
      
function transferirDinero() {
  var cuentaAmiga1 = 1234567;
  var cuentaAmiga2 = 7654321;
  monto = parseInt(prompt("¿Ingrese el monto que desea transferir?"));
  
  if (monto > saldoCuenta) {
    alert("No hay saldo en tu cuenta para transferir esa cantidad de dinero.") }
  else {
    var numeroCuenta = parseInt(prompt("¿Ingrese el numero de cuenta al que desea transferir?"));
  if (numeroCuenta === cuentaAmiga1) {
    function resta(monto){
      saldoCuenta = saldoCuenta - monto;
    }
      alert("Has transferido: $" + monto + "\nCuenta destino: " + cuentaAmiga1) 
      resta(monto);
      actualizarSaldoEnPantalla();}
  else if (numeroCuenta === cuentaAmiga2) {
    function resta(monto){
      saldoCuenta = saldoCuenta - monto;
    }
      alert("Has transferido: $" + monto + "\nCuenta destino: " + cuentaAmiga2) 
      resta(monto);
      actualizarSaldoEnPantalla();}
  else {
      alert("Solo se puede transferir dinero a una cuenta amiga.");
    }
  }    
}

function depositoCheques() {
  var cheque1 = 2323;
  var cheque2 = 3434;
  var cheque;
  
cheque = parseInt(prompt("¿Ingrese el cheque que desea depositar?"));
if (cheque === cheque1) {
  montoDeCheque = parseInt(prompt("¿Ingrese el monto del cheque que desea depositar?"));
  if (isNaN(montoDeCheque))   {return;
  }
  alert("Has depositado: " + montoDeCheque + "\nCorrespondiente al cheque Nro.: " + cheque1 + "\nSu saldo actual es: " + (saldoCuenta+montoDeCheque));
  suma(montoDeCheque);
  actualizarSaldoEnPantalla(); 
}else if (cheque === cheque2) {
  montoDeCheque = parseInt(prompt("¿Ingrese el monto del cheque que desea depositar?"));
    if (isNaN(montoDeCheque))   {return;
    }
  alert("Has depositado: " + montoDeCheque + "\nCorrespondiente al cheque Nro.: " + cheque2 + "\nSu saldo actual es: " + (saldoCuenta+montoDeCheque));
  suma(montoDeCheque);
  actualizarSaldoEnPantalla();
}else{
  alert("El cheque que desea depositar no existe.");
}
}


function iniciarSesion() {
var password = 1234;
var askPassword;
askPassword = parseInt(prompt("¿Ingrese el código de su cuenta?"));

  if (askPassword != password){ 
    alert("Password incorrecto. Su dinero ha sido retenido por cuestiones de seguridad.");
    resta(saldoCuenta - 0);
    actualizarSaldoEnPantalla();
  }else{
    alert("Bienvenido/a Sebastian Ferrer ya puedes comenzar a realizar operaciones.");
    actualizarSaldoEnPantalla();
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


