const ano = new Date().getFullYear();
const ano_inicio = 1989; // colocar valor atualizado!
const tempo_no_mercado = ano - ano_inicio;
document.getElementById("tempo_no_mercado").innerHTML = tempo_no_mercado + " anos de experiência no mercado!";


function configurarWhatsApp() {
    var numeros = [
        "5531988786875",
        "5531991772749"
    ];

    var mensagem = "Olá! Vim ";
    var msgFormatada = encodeURIComponent(mensagem);

    // Sorteia o número da lista
    var sorteado = numeros[Math.floor(Math.random() * numeros.length)];

    // Monta o link
    var urlFinal = "https://wa.me/" + sorteado + "?text=" + msgFormatada;

    // linkar o botão
    var elementoBotao = document.getElementById("btn-whatsapp");
    if (elementoBotao) {
        elementoBotao.href = urlFinal;
        console.log("WhatsApp linkado com wa.me para: " + sorteado);
    }
}
configurarWhatsApp();

