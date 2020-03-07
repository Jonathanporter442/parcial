function mostrar()
{/*   Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
			<br> peso (entre 10 y 1000)en kilo,
	        <br> precio por kilo (más de cero ),
	        <br> tipo validad("v";"a";"m")(vegetal,animal o mezcla ) 
	        <br> Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo de alimento más caro.			
				<br>f)
				El promedio de precio por kilo en total. */

var peso;
var precio;
var tipo;
var respuesta = "si";
var descuento;
var acumPrecio=0;
var maxPrecio=0;
var maxAlimento;
var acumPeso=10;
do{

tipo=prompt("que producto desea llevar ?").toLowerCase();
while(tipo!="V" && tipo!="a" && tipo!="m")
{
  tipo=(prompt("dato invalido. vuelva a ingresarlo")).toLowerCase();
}
peso=parseInt(prompt("Cuantos kilos desea llevar ?"));
while(isNaN(peso) || (peso<10 && peso>1000))
{
  peso=parseInt(prompt("dato invalido vuelva a ingresarlo"));
}

precio=parseInt(prompt("Ingrese el precio del producto"));
while(precio<0)
{
  preq=parseInt(prompt("dato invalido vuelva a ingresarlo"));
}

if (peso>100 )
{
  descuento=(precio*15)/100;

}
if (peso>300)
{
  descuento=(precio*25)/100;
}
acumPrecio=acumPrecio+precio;
acumPeso=acumPeso+peso;



respuesta = prompt("Desea seguir iterando?");

}while(respuesta =="si")

if(maxPrecio>precio)
{
	maxPrecio=tipo;
}
 
 document.write("Importe total a pagar, bruto sin descuento: "+acumPrecio+"<br>");
 document.write("Importe total a pagar con descuento: "+(acumPrecio-descuento)+"<br>");
 document.write("Tipo de alimento más caro: "+maxAlimento+"<br>");
 document.write("Promedio de precio por kilo: "+(acumPrecio/acumPeso)+"<br>");

}//fin
