var imagenes = [];
imagenes["100"] = "dolar100.png";
imagenes["50"] = "dolar50.png";
imagenes["20"] = "dolar20.png";
imagenes["10"] = "dolar10.png";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero <= aaa)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;

      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
      bi.cantidad = bi.cantidad - papeles;
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    aaa = aaa - parseInt(t.value);
    resultado.innerHTML = "<strong>Usted retiro </strong><hr/>";
    for(var e of entregado)
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML += "<br/>" + e.cantidad + " billetes de $" + e.valor + "<br />";      
      }

      for (var i = 0; i < e.cantidad; i++)
      {
        resultado.innerHTML +=  "<img src=" + e.imagen.src + " />";
      }
        e.cantidad = 0;
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 10) );
caja.push( new Billete(10, 10) );
//caja.push( new Billete(5, 10) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var aaa = 0;
for (var t of caja)
{
  //console.log(t);
  var tc = t.cantidad * t.valor;
  //console.log(tc);
  aaa = tc + aaa;
}
