let funcionRevisar = prompt("Ingrese la funcion para identificar que sus delimitadores son correctos:")

for (signo of funcionRevisar) {
    if (signo === "(" || signo === "{" || signo === "[" || signo === "<") {
        console.log("Delimitador de apertura encontrado: " + signo);
    } else if (signo === ")" || signo === "}" || signo === "]" || signo === ">") {
        console.log("Delimitador de cierre encontrado: " + signo);
    } else {
        console.log("Carácter no reconocido: " + signo);
    }
}

