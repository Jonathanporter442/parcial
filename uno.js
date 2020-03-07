function mostrar()
{
	/*Debemos realizar la carga de 5 productos de prevencion de contagio
	de cada uno de los siguientes datos:
	El tipo (validar "barbijo","jabon" o "alcohol"), el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativa y no debe supera las 1000 unidades)
	la marca y el fabricante.
	Se debe informar al usuario lo siguiente :
	a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante
	b)Del item con mas unidades, el fabricante
	c)cuantas unidades de jabones hay en total.
	*/
	
	var tipo;
	var cantidad;
	var precio;
	var precioCaro;
	var fabricanteCheto;
	var fabricanteCheto2;
	var fabricante;
	var acumuladorjabones=0;
	var acumuladorbarbijos=0;
	var acumuladorbarbijosCaros=0;
	var acumuladoralcohol=0;
	var contador=0;
	var flag=0;
	var flag2=0;
	var i;
	
	for(i=1;i<=5;i++)
	{
	  tipo=prompt("Elija el producto que desea").toLowerCase();
	  while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
	  {
		tipo=prompt("Dato invalido. Elija el producto que desea").toLowerCase();
	  }
	  fabricante=prompt("¿Cual es el fabricante del producto?");
	  while(!isNaN)
	  {
		fabricante=prompt("Dato invalido vuelva a ingresar el fabricante");
	  }
	  cantidad=parseInt(prompt("sellecione la cantidad de unidades del producto"));
	  while(cantidad<0 || cantidad>1000)
	  {
		cantidad=parseInt(prompt("Cantidad invalida. vuelva a ingresarla"));
	  }
	  precio=parseInt(prompt("Escriba el precio del producto"));
	  while(precio<100 || precio>300 || isNaN(precio))
	  {
		precio=parseInt(prompt("dato invalido vuelva a ingresarlo"));
	  }
	
	  if(tipo=="jabon")
	{
	  acumuladorjabones=acumuladorjabones + cantidad;
	}
	else if (tipo=="barbijo")
	{
	  acumuladorbarbijos=acumuladorbarbijos + cantidad;
	}
	else{
	  acumuladoralcohol=acumuladoralcohol + cantidad;
	}
	
	
	
	if (tipo=="barbijo" && precioCaro>precio || flag==0)
	{
	  fabricanteCheto=fabricante;
	
	  acumuladorbarbijosCaros=acumuladorbarbijosCaros+cantidad;
	
	}
	
	
	
	
	 }
	
	if(acumuladorjabones>acumuladorbarbijos && acumuladorjabones>acumuladoralcohol)
	{
	  fabricanteCheto2=fabricante;
	}      
	else if(acumuladorbarbijos>acumuladorjabones && acumuladorbarbijos>acumuladoralcohol)
	{
	  fabricanteCheto2=fabricante;
	}
	else{
	  fabricanteCheto2=fabricante;
	}
	  
		alert("La cantidad de jabones en el contenedor es de  : " +acumuladorjabones);
		alert("El fabricante que tiene mas productos en el contenedor es : " +fabricanteCheto2);
		alert("Del mas carode lo barbijos, la cantidad es : " +acumuladorbarbijosCaros+ " y el fabricante es : " +fabricanteCheto);
		  
		  
		  
		  
		  
		  
		  
		  
	}
		  
	
	