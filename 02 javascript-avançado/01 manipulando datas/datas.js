// PEGAR DATAS
// data atual completa com horário
var data = new Date()
console.log(data);

// pegar ano
console.log("ano "+data.getFullYear());

// pegar mês
console.log("mês "+data.getMonth());

// pegar dia da semana
console.log("dia da semana "+data.getDay());

// pegar dia do mês
console.log("dia do mês "+data.getDate());

// pega as horas
console.log("horas "+data.getHours());

// pega os minutos
console.log("minutos "+data.getMinutes());

// pega os segundos
console.log("segundos "+data.getSeconds());

// pegar os milisegundos
console.log("milissegundos "+data.getMilliseconds());


//CRIAR UMA DATA
var dataNova = new Date("February 28, 2025")
console.log("DATA GERADA POR MIM: "+dataNova);
console.log(Date.parse(dataNova));
console.log(new Date(1740711600000))

//FORMATAR DATA
console.log(data.toLocaleDateString());

// SOMAR DATAS

var dataSoma = new Date()

console.log(dataSoma.setDate(dataSoma.getDate() + 5));
console.log(dataSoma.setHours(dataSoma.getHours() + 10));

console.log(dataSoma);
