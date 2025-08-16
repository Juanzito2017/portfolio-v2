var texto = `∑ criatividade + lógica = <strong class="destaque">Juan Leite</strong>`;
var textoElemento = document.querySelector(".apresentacao__principal__titulo");
var atraso = 100;

var i = 0;
var escrevendo = true;

function digitarApagar() {
    if (escrevendo) {
        // Escrever
        if (i < texto.length) {
            if (texto[i] === "<") {
                let fimTag = texto.indexOf(">", i);
                textoElemento.innerHTML = texto.substring(0, fimTag + 1);
                i = fimTag + 1;
            } else {
                textoElemento.innerHTML = texto.substring(0, i + 1);
                i++;
            }
            setTimeout(digitarApagar, atraso);
        } else {
            // Quando terminar de escrever, muda para apagar
            escrevendo = false;
            setTimeout(digitarApagar, 1000); // pausa antes de apagar
        }
    } else {
        // Apagar
        if (i > 0) {
            // Evita apagar dentro de tags HTML
            if (texto[i - 1] === ">") {
                let inicioTag = texto.lastIndexOf("<", i - 1);
                textoElemento.innerHTML = texto.substring(0, inicioTag);
                i = inicioTag;
            } else {
                i--;
                textoElemento.innerHTML = texto.substring(0, i);
            }
            setTimeout(digitarApagar, atraso);
        } else {
            // Quando terminar de apagar, muda para escrever novamente
            escrevendo = true;
            setTimeout(digitarApagar, 500); // pequena pausa antes de recomeçar
        }
    }
}

digitarApagar();
