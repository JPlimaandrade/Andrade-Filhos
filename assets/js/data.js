const ano = new Date().getFullYear();
const ano_inicio = 1989; // colocar valor atualizado!
const tempo_no_mercado = ano - ano_inicio;
document.getElementById("tempo_no_mercado").innerHTML = tempo_no_mercado + " anos de experiência no mercado!";


function configurarWhatsApp() {
    var numeros = [
        "5531988786875",
        "5531991772749"
    ];

    var mensagem = "Olá! Vim pelo site da Andrade & Filhos.";
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


const botaoMenu = document.getElementById('menu-toggle');
    const listaLinks = document.getElementById('menu-links');

    const itensMenu = listaLinks.querySelectorAll('.nav-link');

    botaoMenu.addEventListener('click', () => {
        
        // Liga e desliga a classe que mostra os links no CSS
        listaLinks.classList.toggle('mostrar-menu');
    });

    itensMenu.forEach(link => {
        link.addEventListener('click', () => {
            listaLinks.classList.remove('mostrar-menu');
        });
    });


