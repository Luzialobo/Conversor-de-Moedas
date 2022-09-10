function converterparakwanza(){
    var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
 var valorEmKwanza = valorEmDolarNumerico * 10 ;
 console.log(valorEmKwanza);
 var elementoValorConvertido = document.getElementById("valorConvertido");
 var valorConvertido = "O valor convertido em Kwanza é k$ " + valorEmKwanza;
 elementoValorConvertido.innerHTML = valorConvertido ;

}
 function converterparadolar(){
var valorElemento = document.getElementById("valor");
var valor = valorElemento.value;
var valorEmkwanzaNumerico = parseFloat(valor);
var valorEmDolar = valorEmkwanzaNumerico / 5 ;
 console.log(valorEmDolar);

 var elementoValorConvertido = document.getElementById("valorConvertido");
var valorConvertido = "o valor convertido em Dolar é $" + valorEmDolar;
elementoValorConvertido.innerHTML = valorConvertido;
 }
 function converterparaeuro(){
  var valorElemento = document.getElementById("valor")
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmEuro = valorEmEuroNumerico * 11;
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o valor convertido em Euro é € " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;


 }