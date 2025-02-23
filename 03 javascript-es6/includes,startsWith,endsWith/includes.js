// includes: verifica se inclui algo que estou buscando, devolve um booleano e é casesencitive
console.log("INCLUDES:");

let nomes = ["mateus", "lucas", "jose"];

console.log(nomes.includes("maria"));

if (nomes.includes("mateus")) {
  console.log("está na lista");
} else {
  console.log("não está na lista");
}

console.log(
  "-----------------------------------------------------------------"
);

// startsWith: verifica se algo INICIA com o que eu passar, devolve um booleano e é casesencitive
console.log("STARTSWITH:");

let nome = "mateus";

console.log(nome.startsWith("mat"));
console.log(nome.startsWith("s"));
console.log(
  "-----------------------------------------------------------------"
);

// endsWith: verifica se algo TERMINA com o que eu passar, devolve um booleano e é casesencitive
console.log("ENDSWITH:");

console.log(nome.endsWith("r"));
console.log(nome.endsWith("s"));
