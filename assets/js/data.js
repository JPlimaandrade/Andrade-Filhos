const ano = new Date().getFullYear();
const ano_inicio = 1989; // colocar valor atualizado!
const tempo_no_mercado = ano - ano_inicio;
document.getElementById("tempo_no_mercado").innerHTML = tempo_no_mercado + " anos de experiência no mercado!";

// Ajuste esta mensagem quando quiser alterar o texto enviado no WhatsApp.
const MENSAGEM_PADRAO_WHATSAPP = "Olá! Vim pelo site da Andrade & Filhos.";

function montarLinkWhatsApp(numero, mensagem) {
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
}


function configurarModalWhatsApp() {
    var botaoWhatsapp = document.getElementById("btn-whatsapp");
    var modalWhatsapp = document.getElementById("whatsapp-modal");
    var botaoFecharModal = document.getElementById("whatsapp-modal-close");
    var botoesContato = document.querySelectorAll("[data-whatsapp-number]");

    if (!botaoWhatsapp || !modalWhatsapp || !botaoFecharModal) {
        return;
    }

    botoesContato.forEach(function (botaoContato) {
        var numeroContato = botaoContato.getAttribute("data-whatsapp-number");

        if (!numeroContato) {
            return;
        }

        botaoContato.href = montarLinkWhatsApp(numeroContato, MENSAGEM_PADRAO_WHATSAPP);
    });

    function abrirModal() {
        modalWhatsapp.classList.add("ativo");
        modalWhatsapp.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        
        // Melhora a acessibilidade jogando o foco para o botão de fechar ao abrir
        botaoFecharModal.focus();
    }

    function fecharModal() {
        // CORREÇÃO: Remove o foco do botão interno e joga de volta para o botão flutuante
        botaoWhatsapp.focus();

        // Agora esconde o modal com segurança sem causar o aviso no console
        modalWhatsapp.classList.remove("ativo");
        modalWhatsapp.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    botaoWhatsapp.addEventListener("click", function (evento) {
        evento.preventDefault();
        abrirModal();
    });

    botaoFecharModal.addEventListener("click", fecharModal);

    modalWhatsapp.addEventListener("click", function (evento) {
        if (evento.target === modalWhatsapp) {
            fecharModal();
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && modalWhatsapp.classList.contains("ativo")) {
            fecharModal();
        }
    });
}

configurarModalWhatsApp();


const botaoMenu = document.getElementById('menu-toggle');
const listaLinks = document.getElementById('menu-links');
const navbar = document.getElementById('nav');

const itensMenu = listaLinks.querySelectorAll('.nav-link');

botaoMenu.addEventListener('click', () => {
    const estaAberto = botaoMenu.classList.toggle('ativo');
    listaLinks.classList.toggle('mostrar-menu', estaAberto);
});

itensMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);
        
        // Fecha o menu
        listaLinks.classList.remove('mostrar-menu');
        botaoMenu.classList.remove('ativo');
        
        // Garante que a navbar permaneça visível
        if (navbar) {
            navbar.style.opacity = '1';
            navbar.style.visibility = 'visible';
            navbar.style.display = 'block';
        }
        
        // Faz o scroll suave para o elemento
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });
});


