const ano = new Date().getFullYear();
const ano_inicio = 1969;
const tempo_no_mercado = ano - ano_inicio;
const elementoTempo = document.getElementById("tempo_no_mercado_texto");
const elementoTempo2 = document.getElementById("tempo");


const elementoIdadeJP = document.getElementById("idadeJP");
const elementoIdadeMALU = document.getElementById("idadeMALU");
const aniversarioJP = 2007;
const aniversarioMALU = 2015;

if (elementoTempo) {
    elementoTempo.innerHTML = tempo_no_mercado + " anos de experiência no mercado!";
}
if (elementoTempo2) {
    elementoTempo2.innerHTML = tempo_no_mercado;
}
if (elementoIdadeJP) {
    elementoIdadeJP.innerHTML = ano - aniversarioJP;
}
if (elementoIdadeMALU) {
    elementoIdadeMALU.innerHTML = ano - aniversarioMALU;
}

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

// Verifica se há um elemento para destacar após redirecionamento
function verificarDestaque() {
    const destaqueId = sessionStorage.getItem('destaqueId');
    if (destaqueId) {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
            const targetElement = document.getElementById(destaqueId);
            if (targetElement) {
                // Remove destaque de todos os títulos primeiro
                document.querySelectorAll('.info-card h2').forEach(titulo => {
                    titulo.classList.remove('destaque-titulo');
                });
                
                // Adiciona destaque ao título
                const titulo = targetElement.querySelector('h2');
                if (titulo) {
                    titulo.classList.add('destaque-titulo');
                    // Remove o destaque após 3 segundos
                    setTimeout(() => {
                        titulo.classList.remove('destaque-titulo');
                    }, 3000);
                }
                
                // Faz scroll para o elemento
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
        
        // Limpa o sessionStorage
        sessionStorage.removeItem('destaqueId');
    }
}

// Executa a verificação quando a página carregar
window.addEventListener('load', verificarDestaque);


const botaoMenu = document.getElementById('menu-toggle');
const listaLinks = document.getElementById('menu-links');
const navbar = document.getElementById('nav');

if (botaoMenu && listaLinks) {
    const itensMenu = listaLinks.querySelectorAll('.nav-link');

    botaoMenu.addEventListener('click', () => {
        const estaAberto = botaoMenu.classList.toggle('ativo');
        listaLinks.classList.toggle('mostrar-menu', estaAberto);
    });

    itensMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Verifica se é um link interno com âncora
            if (href && href.includes('#')) {
                e.preventDefault();
                
                const targetId = href.split('#')[1];
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
                
                // Verifica se não está em mobile antes de aplicar destaque
                const isMobile = window.innerWidth <= 768;
                
                if (!isMobile) {
                    // Remove destaque de todos os títulos
                    document.querySelectorAll('.info-card h2').forEach(titulo => {
                        titulo.classList.remove('destaque-titulo');
                    });
                }
                
                // Faz o scroll suave para o elemento se existir
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        // Adiciona destaque ao título da seção apenas se não for mobile
                        if (!isMobile) {
                            const titulo = targetElement.querySelector('h2');
                            if (titulo) {
                                titulo.classList.add('destaque-titulo');
                                // Remove o destaque após 3 segundos
                                setTimeout(() => {
                                    titulo.classList.remove('destaque-titulo');
                                }, 3000);
                            }
                        }
                    }, 100);
                } else {
                    // Se o elemento não existir, salva o ID para destacar após redirecionamento
                    if (!isMobile) {
                        sessionStorage.setItem('destaqueId', targetId);
                    }
                    // Redireciona para a home
                    window.location.href = href;
                }
            } else {
                // Se for um link normal, deixa o comportamento padrão
                listaLinks.classList.remove('mostrar-menu');
                botaoMenu.classList.remove('ativo');
            }
        });
    });
}


