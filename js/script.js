// ============================================================
// NOSSO CANTINHO - Script Principal
// ============================================================

// ===============================
// CONFIGURAÇÕES FÁCEIS DE EDITAR
// ===============================

const CONFIG = {
    tituloSite: "Nosso Cantinho",

    // --- Botão "Não" ---
    mensagensNao: [
        "Tem certeza?",
        "Não acho que você queira isso...",
        "Você realmente vai clicar em não?",
        "Essa opção não está disponível.",
        "Que tal o 'Sim'? 😊",
        "Por que você insiste?",
        "Ok, ok... vou ficar aqui.",
        "Você é persistente!",
        "Desisto. Clica no Sim! ❤️",
        "Sério? Vai clicar de novo?",
        "O 'Não' está ficando com ciúmes.",
        "O 'Sim' está esperando você!",
        "Clica no 'Sim' logo!",
        "O 'Não' já está cansado de fugir."
    ],
    distanciaFuga: 120,
    tentativasAntesDificil: 10,

    // --- Dedicatórias ---
    // Adicione novas cartas aqui!
    cartas: [
        {
            titulo: "Carta 1",
            texto: "Uma pequena mensagem... Escreva aqui algo especial e significativo para vocês dois. Deixe seu coração falar!"
        },
        {
            titulo: "Carta 2",
            texto: "Outra mensagem... Cada palavra aqui carrega um pedacinho do meu amor por você."
        },
        {
            titulo: "Carta 3",
            texto: "Mais uma mensagem... Obrigado por fazer meus dias mais felizes e coloridos."
        }
    ],

    // --- Mídias (Livro) ---
    // Tipos: "imagem", "video", "texto"
    // Para adicionar uma nova página, copie um objeto dentro do array.
    paginasLivro: [
        {
            tipo: "imagem",
            titulo: "Asa Noturna",
            texto: "Dick Grayson encontrou seu próprio símbolo e se tornou o protetor de Blüdhaven.",
            arquivo: "assets/tema/nightwing-leaping-light.jpg",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Movimento e liberdade",
            texto: "A agilidade de um acrobata e a coragem de quem escolheu seguir seu próprio caminho.",
            arquivo: "assets/tema/nightwing-87.jpg",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Uma cidade em azul",
            texto: "Sob as luzes de Blüdhaven, o azul sempre anuncia que seu protetor chegou.",
            arquivo: "assets/tema/nightwing-acao.jpg",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "O símbolo",
            texto: "Uma identidade construída fora da sombra do Morcego.",
            arquivo: "assets/tema/nightwing-back-in-blue.jpg",
            imagemEsquerda: null
        },
        {
            tipo: "texto",
            titulo: "Nosso começo",
            texto: "Tudo começou de uma forma tão especial...",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Primeiro encontro",
            texto: "O dia em que nossos olhares se cruzaram e tudo mudou.",
            arquivo: "assets/fotos/midia1.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Nossa viagem",
            texto: "Lembranças que guardo no coração para sempre.",
            arquivo: "assets/fotos/midia2.png",
            imagemEsquerda: null
        }
    ],

    // --- Memórias ---
    // Formato: "AAAA-MM-DD"
    // ADICIONE SUAS MEMÓRIAS AQUI!
    memorias: {
        "2026-08-13": {
            titulo: "Dia especial",
            texto: "Hoje é um dia muito importante para nós! ❤️",
            imagem: null
        },
        "2026-12-25": {
            titulo: "Natal juntos",
            texto: "O primeiro Natal que passamos juntos, cheio de amor e alegria.",
            imagem: "assets/memorias/midia3.png"
        }
    },

    // --- Interação (Jogo) ---
    totalCoracoes: 10,
    mensagemVitoria: "Missão cumprida. Você encontrou todos! ⚡",

    // --- Surpresa ---
    mensagemSurpresa: "Eu te amo mais do que palavras podem expressar. Você é a pessoa mais incrível que já conheci, e todos os dias ao seu lado são um presente. Obrigado por existir e por ser você! ❤️✨",

    // --- Música ---
    arquivoMusica: "assets/music.mp3"
};

// ============================================================
// ESTADO DA APLICAÇÃO
// ============================================================
let estado = {
    telaAtual: "inicio",
    tentativasNao: 0,
    naoDificil: false,
    paginaLivroAtual: 0,
    totalPaginasLivro: 0,
    mesCalendario: new Date().getMonth(),
    anoCalendario: new Date().getFullYear(),
    coracoesEncontrados: 0,
    surpresaAberta: false,
    tocandoMusica: false,
    audio: null
};

// ============================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================

function $(id) {
    return document.getElementById(id);
}

function mostrarTela(idTela) {
    // Cada tela deve começar do topo, independentemente da posição anterior.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
    });
    const tela = $(idTela);
    if (tela) {
        tela.classList.add('ativa');
        estado.telaAtual = idTela.replace('tela-', '');

        // Garante o topo também após o navegador recalcular a nova tela.
        requestAnimationFrame(() => window.scrollTo(0, 0));
    }
}

function transicaoSuave(elemento, callback) {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(20px)';
    setTimeout(() => {
        callback();
        elemento.style.transition = 'all 0.5s ease-out';
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)';
    }, 300);
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    inicializarMusica();
    inicializarTelaInicio();
    inicializarMenu();
    inicializarDedicatorias();
    inicializarLivro();
    inicializarCalendario();
    inicializarMiniJogo();
    inicializarSurpresa();
    inicializarModais();

    // Inicializar total de páginas do livro
    estado.totalPaginasLivro = Math.ceil(CONFIG.paginasLivro.length / 2);
});

// ============================================================
// MÚSICA DE FUNDO
// ============================================================
function inicializarMusica() {
    try {
        estado.audio = new Audio(CONFIG.arquivoMusica);
        estado.audio.loop = true;
        estado.audio.volume = 0.3;
    } catch (e) {
        console.warn('Não foi possível carregar o arquivo de áudio:', e);
    }
}

function alternarMusica() {
    const btn = $('btn-musica');

    if (!estado.audio) {
        alert('Arquivo de música não encontrado. Coloque o arquivo em: ' + CONFIG.arquivoMusica);
        return;
    }

    if (estado.tocandoMusica) {
        estado.audio.pause();
        estado.tocandoMusica = false;
        btn.textContent = '🔇';
        btn.classList.add('mudo');
    } else {
        estado.audio.play().then(() => {
            estado.tocandoMusica = true;
            btn.textContent = '🔊';
            btn.classList.remove('mudo');
        }).catch(() => {
            alert('O navegador bloqueou o autoplay. Clique novamente para iniciar a música.');
        });
    }
}

// ============================================================
// TELA DE INÍCIO
// ============================================================
function inicializarTelaInicio() {
    const btnSim = $('btn-sim');
    const btnNao = $('btn-nao');

    btnSim.addEventListener('click', () => {
        // O clique do usuário permite que a música comece sem ser bloqueada
        // pela política de reprodução automática do navegador.
        if (estado.audio && !estado.tocandoMusica) {
            estado.audio.play().then(() => {
                estado.tocandoMusica = true;
                const btnMusica = $('btn-musica');
                btnMusica.textContent = '🔊';
                btnMusica.classList.remove('mudo');
            }).catch(() => {
                // O site continua normalmente caso o navegador bloqueie o áudio.
            });
        }

        const cartao = document.querySelector('.cartao-inicio');
        document.body.classList.add('hq-abrindo');
        cartao.style.transition = 'all 0.75s cubic-bezier(.65,0,.35,1)';
        cartao.style.opacity = '0';
        cartao.style.transform = 'perspective(1400px) rotateY(-82deg) translateX(-25%)';

        setTimeout(() => {
            mostrarTela('tela-menu');
            // Atualizar título
            document.title = CONFIG.tituloSite;
            document.body.classList.remove('hq-abrindo');
        }, 760);
    });

    // Botão "Não" foge do cursor
    btnNao.addEventListener('mouseenter', (e) => {
        if (estado.tentativasNao >= CONFIG.mensagensNao.length) {
            return;
        }

        const btn = btnNao;
        const rect = btn.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 20;
        const maxY = window.innerHeight - rect.height - 20;

        let novaX, novaY;

        const multiplicador = estado.tentativasNao > CONFIG.tentativasAntesDificil ? 2 : 1;
        const distancia = CONFIG.distanciaFuga * multiplicador;

        do {
            novaX = Math.random() * maxX;
            novaY = Math.random() * maxY;
        } while (Math.abs(novaX - rect.left) < distancia && Math.abs(novaY - rect.top) < distancia);

        btn.style.position = 'fixed';
        btn.style.left = novaX + 'px';
        btn.style.top = novaY + 'px';
        btn.style.zIndex = '9999';

        estado.tentativasNao++;
        if (estado.tentativasNao <= CONFIG.mensagensNao.length) {
            btn.textContent = CONFIG.mensagensNao[estado.tentativasNao - 1];
        }

        if (estado.tentativasNao > CONFIG.tentativasAntesDificil) {
            const novoSize = Math.max(0.75, 0.9 - (estado.tentativasNao - CONFIG.tentativasAntesDificil) * 0.015);
            btn.style.fontSize = novoSize + 'rem';
        }
    });

    // Para celular: usar touchstart
    btnNao.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const btn = btnNao;
        const maxX = window.innerWidth - btn.offsetWidth - 20;
        const maxY = window.innerHeight - btn.offsetHeight - 20;

        btn.style.position = 'fixed';
        btn.style.left = Math.random() * maxX + 'px';
        btn.style.top = Math.random() * maxY + 'px';
        btn.style.zIndex = '9999';

        estado.tentativasNao++;
        if (estado.tentativasNao <= CONFIG.mensagensNao.length) {
            btn.textContent = CONFIG.mensagensNao[estado.tentativasNao - 1];
        }

        if (estado.tentativasNao > CONFIG.tentativasAntesDificil) {
            const novoSize = Math.max(0.75, 0.9 - (estado.tentativasNao - CONFIG.tentativasAntesDificil) * 0.015);
            btn.style.fontSize = novoSize + 'rem';
        }
    });
}

// ============================================================
// MENU PRINCIPAL
// ============================================================
function inicializarMenu() {
    document.querySelectorAll('.botao-menu').forEach(botao => {
        botao.addEventListener('click', () => {
            const secao = botao.dataset.secao;
            const telaMap = {
                'dedicatorias': 'tela-dedicatorias',
                'midias': 'tela-midias',
                'memorias': 'tela-memorias',
                'interacao': 'tela-interacao',
                'surpresa': 'tela-surpresa'
            };

            if (telaMap[secao]) {
                mostrarTela(telaMap[secao]);

                // Atualizar conteúdo específico de cada seção
                if (secao === 'midias') {
                    atualizarLivro();
                } else if (secao === 'memorias') {
                    renderizarCalendario();
                } else if (secao === 'interacao') {
                    reiniciarJogo();
                }
            }
        });
    });

    // Botão voltar
    document.querySelectorAll('.botao-voltar').forEach(botao => {
        botao.addEventListener('click', () => {
            mostrarTela('tela-menu');
            // Parar música do jogo se estiver tocando
            if (estado.audio && estado.tocandoMusica) {
                // Mantém tocando
            }
        });
    });

    // Botão música
    $('btn-musica').addEventListener('click', alternarMusica);
}

// ============================================================
// DEDICATÓRIAS (CARTAS)
// ============================================================
function inicializarDedicatorias() {
    renderizarCartas();
}

function renderizarCartas() {
    const container = $('conteudo-dedicatorias');
    container.innerHTML = '<div class="cartas-container" id="cartas-container"></div>';

    const cartasContainer = $('cartas-container');

    CONFIG.cartas.forEach((carta, index) => {
        const cartaEl = document.createElement('div');
        cartaEl.className = 'carta';
        cartaEl.innerHTML = `
            <div>
                <div class="carta-titulo">${carta.titulo}</div>
                <div class="carta-preview">${carta.texto}</div>
            </div>
            <div class="carta-icone">💌</div>
        `;

        cartaEl.addEventListener('click', () => {
            abrirCarta(carta);
        });

        cartasContainer.appendChild(cartaEl);
    });
}

function abrirCarta(carta) {
    $('carta-titulo').textContent = carta.titulo;
    $('carta-texto').textContent = carta.texto;
    $('modal-carta').classList.add('ativo');
}

function inicializarModais() {
    // Fechar modal de carta
    $('carta-fechar').addEventListener('click', () => {
        $('modal-carta').classList.remove('ativo');
    });

    // Fechar modal de memória
    $('modal-fechar').addEventListener('click', () => {
        $('modal-memoria').classList.remove('ativo');
    });

    // Fechar modais ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === $('modal-carta')) {
            $('modal-carta').classList.remove('ativo');
        }
        if (e.target === $('modal-memoria')) {
            $('modal-memoria').classList.remove('ativo');
        }
    });
}

// ============================================================
// MÍDIAS (LIVRO INTERATIVO)
// ============================================================
function inicializarLivro() {
    $('livro-anterior').addEventListener('click', () => {
        if (estado.paginaLivroAtual > 0) {
            estado.paginaLivroAtual--;
            atualizarLivro();
        }
    });

    $('livro-proxima').addEventListener('click', () => {
        if (estado.paginaLivroAtual < estado.totalPaginasLivro - 1) {
            estado.paginaLivroAtual++;
            atualizarLivro();
        }
    });

    // Clique na página para avançar
    document.querySelector('.livro').addEventListener('click', (e) => {
        // Se clicou no lado direito, avança; esquerda, volta
        const livro = e.currentTarget;
        const rect = livro.getBoundingClientRect();
        const cliqueX = e.clientX - rect.left;
        const metade = rect.width / 2;

        if (cliqueX > metade && estado.paginaLivroAtual < estado.totalPaginasLivro - 1) {
            estado.paginaLivroAtual++;
            atualizarLivro();
        } else if (cliqueX <= metade && estado.paginaLivroAtual > 0) {
            estado.paginaLivroAtual--;
            atualizarLivro();
        }
    });

    atualizarLivro();
}

function atualizarLivro() {
    const indiceEsquerda = estado.paginaLivroAtual * 2;
    const indiceDireita = indiceEsquerda + 1;

    const paginaEsquerda = $('pagina-esquerda');
    const paginaDireita = $('pagina-direita');
    const contador = $('contador-paginas');

    // Página esquerda
    if (indiceEsquerda < CONFIG.paginasLivro.length) {
        const pagina = CONFIG.paginasLivro[indiceEsquerda];
        paginaEsquerda.innerHTML = renderizarPagina(pagina);
    } else {
        paginaEsquerda.innerHTML = '<span class="pagina-vazio">—</span>';
    }

    // Página direita
    if (indiceDireita < CONFIG.paginasLivro.length) {
        const pagina = CONFIG.paginasLivro[indiceDireita];
        paginaDireita.innerHTML = renderizarPagina(pagina);
    } else {
        paginaDireita.innerHTML = '<span class="pagina-vazio">—</span>';
    }

    // Atualizar contador
    const numPagina = estado.paginaLivroAtual + 1;
    contador.textContent = `${numPagina} / ${estado.totalPaginasLivro}`;

    // Atualizar botões
    $('livro-anterior').disabled = estado.paginaLivroAtual === 0;
    $('livro-proxima').disabled = estado.paginaLivroAtual >= estado.totalPaginasLivro - 1;
}

function renderizarPagina(pagina) {
    if (!pagina) return '<span class="pagina-vazio">—</span>';

        if (pagina.tipo === 'imagem') {
        return `
            <img class="pagina-imagem" src="${pagina.arquivo}" alt="${pagina.titulo}">
            <div class="pagina-titulo">${pagina.titulo}</div>
            <div class="pagina-texto">${pagina.texto}</div>
        `;
    } else if (pagina.tipo === 'video') {
        return `
            <video class="pagina-video" controls>
                <source src="${pagina.arquivo}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
            <div class="pagina-titulo">${pagina.titulo}</div>
        `;
    } else if (pagina.tipo === 'texto') {
        return `
            <div class="pagina-titulo">${pagina.titulo}</div>
            <div class="pagina-texto">${pagina.texto}</div>
        `;
    }

    return '<span class="pagina-vazio">Página vazia</span>';
}

// ============================================================
// CALENDÁRIO DE MEMÓRIAS
// ============================================================
function inicializarCalendario() {
    $('mes-anterior').addEventListener('click', () => {
        estado.mesCalendario--;
        if (estado.mesCalendario < 0) {
            estado.mesCalendario = 11;
            estado.anoCalendario--;
        }
        renderizarCalendario();
    });

    $('mes-proximo').addEventListener('click', () => {
        estado.mesCalendario++;
        if (estado.mesCalendario > 11) {
            estado.mesCalendario = 0;
            estado.anoCalendario++;
        }
        renderizarCalendario();
    });

    renderizarCalendario();
}

function renderizarCalendario() {
    const container = $('calendario-dias');
    const mesAtual = $('mes-atual');

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    mesAtual.textContent = `${meses[estado.mesCalendario]} ${estado.anoCalendario}`;

    const primeiroDia = new Date(estado.anoCalendario, estado.mesCalendario, 1).getDay();
    const diasNoMes = new Date(estado.anoCalendario, estado.mesCalendario + 1, 0).getDate();

    const hoje = new Date();
    const diaHoje = hoje.getDate();
    const mesHoje = hoje.getMonth();
    const anoHoje = hoje.getFullYear();

    container.innerHTML = '';

    // Espaços vazios antes do primeiro dia
    for (let i = 0; i < primeiroDia; i++) {
        const espaco = document.createElement('button');
        espaco.className = 'dia-calendario vazio';
        espaco.disabled = true;
        container.appendChild(espaco);
    }

    // Dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
        const btnDia = document.createElement('button');
        btnDia.className = 'dia-calendario';
        btnDia.textContent = dia;

        // Verificar se é hoje
        if (dia === diaHoje && estado.mesCalendario === mesHoje && estado.anoCalendario === anoHoje) {
            btnDia.classList.add('hoje');
        }

        // Verificar se tem memória
        const chaveMemoria = `${estado.anoCalendario}-${String(estado.mesCalendario + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        if (CONFIG.memorias[chaveMemoria]) {
            btnDia.classList.add('com-memoria');
            btnDia.addEventListener('click', () => abrirMemoria(chaveMemoria));
        }

        container.appendChild(btnDia);
    }
}

function abrirMemoria(chave) {
    const memoria = CONFIG.memorias[chave];
    if (!memoria) return;

    $('modal-titulo').textContent = memoria.titulo;
    $('modal-texto').textContent = memoria.texto;

    const imgModal = $('modal-imagem');
    if (memoria.imagem) {
        imgModal.src = memoria.imagem;
        imgModal.style.display = 'block';
        imgModal.onerror = function () {
            this.style.display = 'none';
        };
    } else {
        imgModal.style.display = 'none';
    }

    $('modal-memoria').classList.add('ativo');
}

// ============================================================
// MINI JOGO (ENCONTRAR CORAÇÕES)
// ============================================================
function inicializarMiniJogo() {
    $('btn-reiniciar-jogo').addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    estado.coracoesEncontrados = 0;
    atualizarPlacar();
    gerarCoracoes();
}

function gerarCoracoes() {
    const area = $('area-coracoes');
    area.innerHTML = '';

    const total = CONFIG.totalCoracoes;

    for (let i = 0; i < total; i++) {
        const coracao = document.createElement('span');
        coracao.className = 'coracao';
        coracao.textContent = '🔷';

        // Posição aleatória dentro da área
        const areaRect = area.getBoundingClientRect();
        const maxX = areaRect.width - 40;
        const maxY = areaRect.height - 40;

        coracao.style.left = Math.random() * maxX + 'px';
        coracao.style.top = Math.random() * maxY + 'px';

        // Animação de entrada com delay
        coracao.style.animationDelay = (i * 0.1) + 's';

        coracao.addEventListener('click', () => {
            if (coracao.classList.contains('encontrado')) return;

            coracao.classList.add('encontrado');
            estado.coracoesEncontrados++;
            atualizarPlacar();

            if (estado.coracoesEncontrados >= CONFIG.totalCoracoes) {
                setTimeout(() => {
                    vitoriaJogo();
                }, 800);
            }
        });

        area.appendChild(coracao);
    }
}

function atualizarPlacar() {
    const placar = $('placar');
    placar.textContent = `Símbolos encontrados: ${estado.coracoesEncontrados} / ${CONFIG.totalCoracoes}`;
}

function vitoriaJogo() {
    const area = $('area-coracoes');
    area.innerHTML = `<p class="mensagem-vitoria">${CONFIG.mensagemVitoria}</p>`;
    criarEfeito('⚡', 20);
}

// ============================================================
// SURPRESA FINAL
// ============================================================
function inicializarSurpresa() {
    $('btn-abrir-surpresa').addEventListener('click', () => {
        $('surpresa-container').style.display = 'none';
        $('surpresa-revelada').style.display = 'block';
        $('texto-surpresa-final').textContent = CONFIG.mensagemSurpresa;

        // Efeito de corações/confetes
        criarEfeito('🪽', 30);
        setTimeout(() => criarEfeito('⚡', 20), 1000);
    });
}

// ============================================================
// EFEITO DE CORAÇÕES / CONFETES
// ============================================================
function criarEfeito(emoji, quantidade) {
    const container = $('efeito-container');
    container.innerHTML = '';

    for (let i = 0; i < quantidade; i++) {
        setTimeout(() => {
            const item = document.createElement('span');
            item.className = 'efeito-item';
            item.textContent = emoji;
            item.style.left = Math.random() * 100 + '%';
            item.style.animationDuration = (2 + Math.random() * 2) + 's';
            item.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(item);

            // Remover após animação
            setTimeout(() => {
                if (item.parentNode) {
                    item.parentNode.removeChild(item);
                }
            }, 4000);
        }, i * 100);
    }
}

// ============================================================
// COMO EDITAR (INSTRUÇÕES NO CONSOLE)
// ============================================================
console.log('========================================');
console.log('💖 NOSSO CANTINHO - Guia de Edição 💖');
console.log('========================================');
console.log('');
console.log('📁 ONDE EDITAR:');
console.log('   - Textos e configurações: arquivo js/script.js, objeto CONFIG');
console.log('   - Cores e estilos: arquivo css/style.css');
console.log('   - Estrutura: arquivo index.html');
console.log('');
console.log('📝 COMO ADICIONAR UMA NOVA CARTA:');
console.log('   Em CONFIG.cartas, adicione um novo objeto:');
console.log('   { titulo: "Título", texto: "Mensagem aqui" }');
console.log('');
console.log('📖 COMO ADICIONAR UMA NOVA PÁGINA NO LIVRO:');
console.log('   Em CONFIG.paginasLivro, adicione um objeto:');
console.log('   { tipo: "imagem", titulo: "...", texto: "...", arquivo: "assets/fotos/midia1.png" }');
console.log('   Tipos disponíveis: "imagem", "video", "texto"');
console.log('');
console.log('🗓️ COMO ADICIONAR UMA NOVA MEMÓRIA:');
console.log('   Em CONFIG.memorias, adicione uma nova chave:');
console.log('   "AAAA-MM-DD": { titulo: "...", texto: "...", imagem: "assets/memorias/midia3.png" }');
console.log('   EXEMPLO para dezembro: "2026-12-25": { ... }');
console.log('');
console.log('📸 ONDE COLOCAR AS FOTOS:');
console.log('   - Fotos do livro:     assets/fotos/     (nomeie como midia1.png, midia2.png...)');
console.log('   - Fotos de memórias:  assets/memorias/  (nomeie como midia3.png, midia4.png...)');
console.log('   - Vídeos:             assets/videos/');
console.log('   - Música:             assets/music.mp3');
console.log('');
console.log('🎵 COMO ADICIONAR MÚSICA:');
console.log('   1. Coloque o arquivo .mp3 na pasta assets/');
console.log('   2. O arquivo padrão é: assets/music.mp3');
console.log('');
console.log('✏️ COMO ALTERAR O TEXTO FINAL:');
console.log('   Edite CONFIG.mensagemSurpresa no arquivo js/script.js');
console.log('');
console.log('💡 DICA: Abra o arquivo js/script.js e edite o');
console.log('    objeto CONFIG no início do arquivo.');
console.log('========================================');

// ============================================================
// HANDLER GLOBAL PARA IMAGENS QUE FALHAM
// ============================================================
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = 'color:#aaa;text-align:center;padding:2rem;font-size:0.95rem;';
        placeholder.innerHTML = '📷<br><small>Imagem não encontrada</small>';
        e.target.parentNode.insertBefore(placeholder, e.target.nextSibling);
    }
}, true);
