function mostrar()
{
var nombre;
var edad;
var sexo;
var estadoCivil;
var respuesta = "si";
var edadMasChica=0;
var edadMasGrande=0;
var nombreJoven;
var contMujeresCoV=0;
var cantMujeres=0;
var cantHombres=0;
var acumEdadMujer=0;
var acumEdadHombre=0;
var sexoMasGrande;


while(respuesta == "si")
{
	nombre=prompt("Ingrese su nombre");
 
    while(!isNaN(nombre))
    {
        nombre = prompt("Error, Ingrese su nombre");
    }

    edad=parseInt(prompt("Ingrese su edad, debe ser mayor a 18"));

    while(isNaN(edad) || edad < 18)
    {
      edad=parseInt(prompt("No, Ingrese su edad mayor a 18"));
    }
  
	sexo=prompt("Ingrese su sexo: f o m");
	
	while(sexo != "f" && sexo != "m")
	{
      sexo=prompt("No, Ingrese su sexo f o m");
    }
  
 	estadoCivil=prompt("Ingrese su estado civil: soltero, casado o viudo");
    
    while(estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "soltero")
    {
      estadoCivil=prompt("No, Ingrese  soltero, casado o viudo");
	}


if(edadMasChica<edad)
{
 	edadMasChica = edad;
}
if(edadMasGrande>edad)
{
	 edadMasGrande = edad;
	 sexoMasGrande = sexo;
}

if( estadoCivil == "casado" && edadMasChica && sexo == "m")
{
	nombreJoven = nombre;
}

if(sexo == "f" && estadoCivil == "casadas" || estadoCivil == "viudas")
{
	contMujeresCoV++;
}
if (sexo == "f")
{
	cantMujeres++;
	acumEdadMujer = acumEdadMujer + edad
}
if (sexo == "m")
{
	cantHombres++;
	acumEdadHombre = acumEdadHombre + edad
}

respuesta=prompt("Desea seguir iterando?");



}


document.write("El nombre del hombre casado más joven: "+nombreJoven+"<br>")
document.write("El sexo y nombre del pasajero/a más viejo: "+sexoMasGrande+", "+edadMasGrande+"<br>")
document.write("La cantidad de mujeres que hay casadas o viudas: "+contMujeresCoV+"<br>")
document.write("El promedio de edad entre las mujeres: "+(acumEdadMujer/cantMujeres)+"<br>")
document.write("El promedio de edad entre los hombres solteros: "+(acumEdadHombre/cantHombres)+"<br>")





}//fin
