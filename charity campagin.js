function suma (input){
  let dni = Number(input.shift());
  let uchastnici = Number(input.shift());
  let torti = Number(input.shift());
  let gofreti = Number(input.shift());
  let palachinki = Number(input.shift());

  let sumaTorti = torti * 45;
  let sumaGofreti = gofreti * 5.80;
  let sumaPalachinki = palachinki * 3.20;

  let sumaDen =(sumaTorti + sumaGofreti + sumaPalachinki) * uchastnici ;
  let cqlataSuma = sumaDen * dni;
  let otdrushka = cqlataSuma - (cqlataSuma/8);

  console.log(otdrushka.toFixed(2));
 }
suma ([
  50,
  10,
  3.5,
  6.5,
  1

])