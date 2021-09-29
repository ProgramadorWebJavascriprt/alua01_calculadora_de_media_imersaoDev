// Quarta-feira,29/09/2021{pela amanã} das 08:42:39 até as  h +|-
// Obs.: Explicando a função da Imersão Dev com JavaScript... e sobre o CodePen,HTML,CSS e Js...
var nome = "André Luis";
var notaDoPrimeiroBimestre = 9.999;
var notaDoSegundoBimestre = 8.888;
var notaDoTerceiroBimestre = 7.777;
var notaDoQuartoBimestre = 6.777;
var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;
var notaFixada = notaFinal.toFixed(1);
console.log("Aluno:", nome, "sua nota final é:", +notaFixada);
//var notaFixada = notaFinal.toFixed(1);// se caso a variaveis vai após o console.log() aparece isto ""Aluno:" "André Luis" "sua nota final é:" NaN"
