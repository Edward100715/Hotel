
function Img1(){
    const miImg1 = document.getElementById("habitacion");
    miImg1.src = "../IMG/habitacion2.jpg"
}
function Img2(){
    const miImg1 = document.getElementById("habitacion");
    miImg1.src = "../IMG/habitacion1.jpg"
}

function Cotizar() {
    const nPers = document.querySelector("#nroPer").value;
    const nDias = document.querySelector("#nroDias").value;
    const nValorPers = document.querySelector("#vlrPer").value;
    const nResultado = document.querySelector("#Resultado");

    const nTotal = Number(nPers) * Number(nDias) * Number(nValorPers);

    nResultado.textContent = nTotal;
}