let dado = document.getElementById("dado");
let quantidade = document.getElementById("qtdeDados")
let secaoDados = document.getElementById("secaoDados");
let div = document.createElement("div");
let dado2;

Number(quantidade.value);

dado.addEventListener("click", lancamento);
quantidade.addEventListener("change", quantidadeDado);


function lancamento() {
    let numero = Math.floor(Math.random() * 6),
        numero2 = Math.floor(Math.random() * 6);
    mostrarFace(numero, numero2);
}

function mostrarFace(numero, numero2) {
    dado.style.backgroundImage = `url(face${numero}.png)`;
    if(quantidade.value == 2) {
        dado2.style.backgroundImage = `url(face${numero2}.png)`;
    }
}

function quantidadeDado() {
    if(quantidade.value == 2) {
        dado2 = secaoDados.appendChild(div);
        div.classList.add("dado");
        div.id = "dado2";
        div.addEventListener("click", lancamento); 
    } else {
        secaoDados.removeChild(div);
    }
}