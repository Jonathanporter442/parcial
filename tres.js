function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoC;
	var Cmasjoven;
	var EdadXL;
	var sexoXL;
	var edadmin;
	var contadorCV=0;
	var acumuladorEdadF=0;
	var acumuladorEdadM=0;
	var contadorM=0;
	var contadorS=0;
	var promedioEdadF;
	var promedioEdadM;
	var respuesta="si";

	do{	nombre=prompt("ingrese el nombre del pasajero");
		edad=parseInt(prompt("ingrese la edad"))
		while(isNaN(edad) && edad<18)
		{
			edad=parseInt(prompt("reingrese la edad"));
		}
		sexo=prompt("ingrese el sexo utilizando F o m").toLowerCase();
		while(sexo!="f" && sexo!="m" &&!isNaN(sexo))
		{
			sexo=prompt("sexo invalido vuelva a ingresarlo").toLowerCase();
		}
		estadoC=prompt("ingrese el estado civil('soltero', 'casado' o 'viudo')")
		while(estadoC!="soltero" && estadoC!="casado" && estadoC!="viudo")
		{
			estadoC=prompt("ingrese de nuevo es estado civil");
		}

		if(sexo=="f")
		{
			acumuladorEdadF=acumuladorEdadF+edad
			contadorM++;
		}

		if(sexo=="m" && edadmin<edad && estadoC=="casado")
		{
		edadmin=edad;
		Cmasjoven=nombre;
		}

		if(EdadXL>edad)
		{
			EdadXL=nombre;
			sexoXL=sexoXL;

		}

		if(sexo=="m" && estadoC=="casado" || estadoC=="viudo")
		{
			contadorCV++;
		}

		if(sexo=="m" && estadoC=="soltero")
		{
			acumuladorEdadM=acumuladorEdadM+edad;
			contadorS++;

		}


		respuesta=prompt("¿Quiere seguir ingresando pasajeros?")

	}while(respuesta=="si");

	promedioEdadF=acumuladorEdadF/contadorM;
	promedioEdadM=acumuladorEdadM/contadorS;

	document.write("El nombre del hombre mas joven que esta casado es : " +Cmasjoven+"</br>");
	document.write("El sexo de la persona de mayor edad abordo es : " +sexoXL+ " y su nombre es : " +EdadXL+"</br>");
	document.write("La cantidad de mujere casadas o viudas es : " +contadorCV+"</br>");
	document.write("El promedio de edad de las mijeres es : " +promedioEdadF+"</br>");
	document.write("El promedio de los hombres solteros es : " +promedioEdadM);






}//fin
