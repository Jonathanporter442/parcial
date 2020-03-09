function mostrar()
{
var alimento;
var peso;
var precioXKilo;
var preciototal;
var precioConDescuento;
var descuento;
var importeFinal;
var alimentomax=0;
var NombreMax;
var promediopreciototal;
var acumuladorPrecio=0;
var contador1=0;
var flag=0;
var respuesta="si";


	do{

		alimento=prompt("Ingrese el alimento que desea llevar(v,a,m)(vegetal,animal,mezcla)").toLowerCase();
		while(alimento!="v" && alimento!="a" && alimento!="m" 
				|| (alimento!="vegetal" && alimento!="animal" && alimento!="mezcla"))

		{
			alimento=prompt("Dato invalido, vuelva a ingresarlo").toLowerCase();
		}
		peso=parseInt(prompt("ingrese el peso  del producto"));
		while(peso<10 || peso>1000 || isNaN(peso))
		{
			peso=parseInt(prompt("dato invalido vuelva a ingresarlo"));
		}
		precioXKilo=parseInt(prompt("ingres ele precio por kilo del producto "));
		while(isNaN(precioXKilo) || precioXKilo<0)
		{
			precioXKilo=parseInt(prompt("dato invalido vuelva a ingresarlo"));
		}

		preciototal=precioXKilo*peso;
		acumuladorPrecio=acumuladorPrecio+precioXKilo;
		contador1++;
		
		if(alimentomax>precio||flag==0)
		{
			alimentomax=precio;
			NombreMax=alimento;
			flag==1;
		}	




respuesta=prompt("quiere seguir ?")
}while(respuesta=="si");

if(peso=="100")
		{
			descuento=preciototal*15/100
			precioConDescuento=preciototal-descuento

		}

		if(peso=="300")
		{
			descuento=preciototal*25/100
			precioConDescuento=preciototal-descuento

		}

	


importeFinal=preciototal+importeFinal;
importeDesuento=preciototal-precioConDescuento;
promediopreciototal=acumuladorPrecio/contador1;





























}
