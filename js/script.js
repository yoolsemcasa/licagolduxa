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
    // Cada dedicatória combina um casal com uma mensagem especial.
    cartas: [
        { titulo: "Peter & Gwen", texto: "Em qualquer universo, eu ainda encontraria um jeito de escolher você. 🕸️💙", gif: "assets/gifs/01.gif" },
        { titulo: "Mavis & Johnny", texto: "Você transformou meu mundo e fez até o diferente parecer lar. 🦇❤️", gif: "assets/gifs/02.gif" },
        { titulo: "Ravena & Mutano", texto: "Até nos dias mais sombrios, você sempre encontra um jeito de me fazer sorrir. 💜💚", gif: "assets/gifs/03.gif" },
        { titulo: "Arlequina & Hera", texto: "Nosso amor floresce do nosso jeitinho: intenso, livre e impossível de ignorar. 🌿💞", gif: "assets/gifs/04.gif" },
        { titulo: "Violet & Tate", texto: "Mesmo entre sombras e fantasmas, meu coração ainda encontraria o caminho até você. 🖤🥀", gif: "assets/gifs/05.gif" },
        { titulo: "Denji & Reze", texto: "Mesmo quando o mundo vira caos, um instante ao seu lado faz tudo valer a pena. 🌙💛", gif: "assets/gifs/06.gif" },
        { titulo: "Temari & Shikamaru", texto: "Talvez amar dê trabalho… mas, com você, é o meu trabalho favorito. 🍃💛", gif: "assets/gifs/07.gif" },
        { titulo: "Diane & King", texto: "Não importa o tempo ou a distância: meu coração nunca esquece o caminho até você. 🌸✨", gif: "assets/gifs/08.gif" },
        { titulo: "Maka & Soul", texto: "Você é a sintonia perfeita que faz minha alma dançar. 🎵🤍", gif: "assets/gifs/09.gif" },
        { titulo: "Minato & Kushina", texto: "Você é o amor que ilumina minha vida mais rápido que qualquer relâmpago. ⚡❤️", gif: "assets/gifs/10.gif" },
        { titulo: "Anna & Kristoff", texto: "Algumas pessoas valem a pena derreter — e eu escolheria você em qualquer inverno. ❄️💙", gif: "assets/gifs/11.gif" },
        { titulo: "Lucy & Schroeder", texto: "Meu coração sempre escolhe sentar pertinho de você e ouvir nossa música. 🎹💛", gif: "assets/gifs/12.gif" },
        { titulo: "Jane & Lisbon", texto: "Entre provocações e cumplicidade, você virou o meu mistério favorito. ☕💙", gif: "assets/gifs/13.gif" },
        { titulo: "Asa Noturna & Estelar", texto: "Você é a luz que colore minhas noites e faz meu coração voar. 🪽💫", gif: "assets/gifs/14.gif" },
        { titulo: "Homem-Aranha & Gata Negra", texto: "Entre saltos, perigos e brincadeiras, eu sempre quero cair nos seus braços. 🕷️🖤", gif: "assets/gifs/15.gif" }
    ],

    // --- Mídias (Livro) ---
    // Tipos: "imagem", "video", "texto"
    // Para adicionar uma nova página, copie um objeto dentro do array.
    paginasLivro: [
        {
            tipo: "imagem",
            titulo: "Alicia & Ricky",
            texto: "Je t'aime, mon amour 💛",
            arquivo: "assets/fotos/alicia-ricky.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Nossa missão favorita",
            texto: "Entre missões e segredos, eu escolheria você em todas as vidas. 🖤",
            arquivo: "assets/fotos/alicia-ricky-elegante-escuro.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "29.08 — Sempre nós",
            texto: "Mesmo em silêncio, meu coração sempre encontra o caminho até você. 🤍",
            arquivo: "assets/fotos/alicia-ricky-29-08.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Um presente chamado amor",
            texto: "Entre implicâncias, risadas e carinho, meu lugar preferido sempre será ao seu lado. 💌",
            arquivo: "assets/fotos/alicia-ricky-fofinho.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Almas gêmeas",
            texto: "Você é a única missão que eu escolheria nunca terminar. ✨",
            arquivo: "assets/fotos/alicia-ricky-elegante-claro.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Meu melhor presente",
            texto: "Nem a distância, nem qualquer batalha seria capaz de me afastar de você. 🧡",
            arquivo: "assets/fotos/alicia-ricky-ninjas.png",
            imagemEsquerda: null
        },
        {
            tipo: "imagem",
            titulo: "Um ano de nós",
            texto: "Nossa história é o conto favorito que eu escolheria viver para sempre. ❤️",
            arquivo: "assets/fotos/lica-ricky-um-ano.png",
            imagemEsquerda: null
        },
        {
            tipo: "video",
            titulo: "Amores lendários",
            texto: "Em qualquer universo, meu par favorito sempre vai ser você. ♡",
            arquivo: "assets/videos/licky.mp4"
        },
        {
            tipo: "video",
            titulo: "Eu sigo você",
            texto: "Se for com você, eu sigo — hoje, amanhã e em todas as aventuras. 💙",
            arquivo: "assets/videos/licky2.mp4"
        }
    ],

    // --- Surpresa ---
    mensagemSurpresa: `OIII MEU AMOR, TUDO BEM? antes de tudo, eu queria muito te agradecer pela incrível pessoa que você é pra mim, de como minha vida melhorou desde o dia que passamos a conversar e de como você me salva e me faz extremamente bem todos os dias. todas as noites ficam tranquilas e incríveis se recebo um boa noite seu e vou dormir feliz sabendo que, no outro dia, sempre vai ter o melhor bom dia do mundo, que é o seu, o tornando realmente bom (ou até mais do que isso).

Eu também quero agradecer por você sempre ter sido, continua sendo, uma pessoa maravilhosa, perfeita, incrível, extremamente boa, especial, amável, gentil, generosa, carinhoso, amigável, confiável, meu melhor amigo, meu amor, acolhedor e valioso pra mim e nunca ter me feito pensar que sou alguém difícil de lidar.

Eu me sinto tão bem e confortável com você que passa a ser a melhor definição de “se sentir nas nuvens”, mesmo que essa sensação seja totalmente indiscritível, acho que consigo usar essa expressão só pra ter uma “base”.

Ficar sem você parece a maior tortura do mundo. Sempre que você vai dormir, as noites e as madrugadas parecem se tornar uma eternidade que, sinceramente, eu desejo que acabe em milésimos, porque segundos ainda é muito.

o meu maior sonho é poder te encontrar, casar com você e ficar contigo pra sempre, ficar pra sempre te amando, te enchendo de beijos, abraços e tudo que há de bom nesse mundo.

Quando você me diz algo negativo sobre si mesmo, mesmo que brincando, eu fico com uma vontade enorme de arrancar meus olhos, meus ouvidos e te passar todos os meus pensamentos pra você ver o quanto você é incrível, importante e essencial pra mim, sua família e para todos ao seu redor.

eu queria poder conseguir fazer você ver o quanto eu te amo mas, é muito difícil descrever em palavras algo que nem limite ou uma mínima definição tem.

Eu amo suas palhaçadas, sua risada, quando você usa meu vocabulário, a sua sinceridade com tudo, amo ser amada por você, sua presença, sua alegria, amo saber tudo sobre você, amo sempre escutar sobre coisas que você gosta, a forma que você é comigo me faz bem e me faz encontrar conforto, amo sempre acordar e ter mensagens suas, independente do horário, amo sempre quando nos resolvemos após alguma discussão, amo escutar sua voz, amo receber mensagens suas, amo poder te chamar de amor, amo amar nosso relacionamento, amo como você confia em mim pra dizer sobre você, amo tudo que remeta você, amo ficar em call com você, amo lembrar de qualquer interação nossa (mesmo que eu desgoste da minha parte, já que eu não sabia conversar), amo seus olhos, amo seu cabelo, amo quando você vem me contar que comeu muito depois de alguma refeição, amo escutar você dizer sobre algo que gosta, amo ouvir suas explicações, amo o quanto você é inteligente, amo poder conversar com você, amo o fato que ao mesmo tempo que somos namorados, também somos melhores amigos, que é o que melhora tudo na nossa relação

resumindo(se não, eu faria uma parte imensa só pra dizer o que eu amo em você e no nosso relacionamento), eu amo tudo que tenha você e nós.

Quero que saiba que, nada no mundo me faria te amar menos ou parar de te amar. seja a distância, castigos (0 comentários), discussões, pessoas de fora ou o que for, porque você é o amor da minha vida, e eu nunca parei de te amar ou dizer isso por quaisquer um desses motivos.

quero também que esse seja o nosso primeiro de muitos aniversários de namoro e que eu possa me casar com você algum dia e que seja o casamento mais lindo de todos, com a nossa futura família.

você é a pessoa mais importante do mundo e que eu mais amo, aquele que eu sempre vou desejar em horas iguais ou 04:47, em velas, quando cair um cílios dos meus olhos, quando eu ver uma estrela cadente ou o que for. todas as vezes que eu desejei alguém que me amasse e me trouxesse paz, foram atendidas, e você veio. veio e transformou minha vida em algo completamente diferente, mostrando que, tudo com você se torna “novo”. até mesmo um “eu te amo”, que eu sempre escuto, parece a primeira vez.

estar com você me mostrou o que é ser amada e amar de verdade, a leveza e como é realmente um relacionamento. me trouxe outras visões e registrou coisas incríveis na minha memória, que eu vou levar pra sempre comigo.

Bom, acredito que o texto esteja ficando beeem longo e eu ainda não consegui dizer nem 1% do meu amor por você, se não eu ficaria mais de horas, dias e semanas escrevendo (o que não seria problema algum). mas, eu te amo muito meu amor.

eu sempre desejo o melhor pra você, desejo estar sempre aqui pra tudo que você precisar, independente do que ou quando for

você é o amor da minha vida toda e meu peito dói de tanto te amar. eu nunca pensei que era possível amar alguém tanto assim, até você chegar. o amor realmente é uma das melhores sensações do mundo quando se vive ele com a pessoa certa e no momento certo e você é a prova viva disso, meu bem.

você está em todas as partes boas da minha vida e é sempre quem eu desejo conversar sempre que posso, independente se for algo bom ou ruim. gosto quando ficamos bem depois de uma fase ruim, porque quando passamos por algo turbulento/negativo, eu vejo que aquilo foi necessário para que possamos notar melhora ou que estamos bem um com o outro. não digo que brigas constantemente são necessárias, mas desentendimentos acontecem, conseguimos passar por eles e tá tudo bem.

acredito que, uma das partes mais gostosas de estar contigo é poder escutar ou ler comentários positivos, dizendo que somos um bom casal, um casal duradouro, entre outros.

bem, eu acabei desfocando ali no que era pra ser o final, e peço perdão por isso. mas, agora é sério. eu te amo muito meu bebê e feliz 1 ano de nóss`,

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
    inicializarSurpresa();
    inicializarModais();

    // Inicializar total de páginas do livro
    estado.totalPaginasLivro = CONFIG.paginasLivro.length;
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
                'surpresa': 'tela-surpresa'
            };

            if (telaMap[secao]) {
                mostrarTela(telaMap[secao]);

                // Atualizar conteúdo específico de cada seção
                if (secao === 'midias') {
                    atualizarLivro();
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
        cartaEl.className = 'carta carta-personagem';
        cartaEl.tabIndex = 0;
        cartaEl.setAttribute('role', 'button');
        cartaEl.setAttribute('aria-label', `Abrir dedicatória de ${carta.titulo}`);
        cartaEl.innerHTML = `
            <div class="carta-gif-moldura">
                <img class="carta-gif" src="${carta.gif}" alt="${carta.titulo}" loading="lazy">
            </div>
            <div class="carta-personagem-conteudo">
                <div class="carta-titulo">${carta.titulo}</div>
                <div class="carta-preview">${carta.texto}</div>
            </div>
        `;

        cartaEl.addEventListener('click', () => {
            abrirCarta(carta);
        });
        cartaEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                abrirCarta(carta);
            }
        });

        cartasContainer.appendChild(cartaEl);
    });
}

function abrirCarta(carta) {
    $('carta-titulo').textContent = carta.titulo;
    $('carta-texto').textContent = carta.texto;
    const gifModal = $('carta-gif-modal');
    gifModal.src = carta.gif;
    gifModal.alt = carta.titulo;
    $('modal-carta').classList.add('ativo');
}

function inicializarModais() {
    // Fechar modal de carta
    $('carta-fechar').addEventListener('click', () => {
        $('modal-carta').classList.remove('ativo');
    });

    // Fechar modais ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === $('modal-carta')) {
            $('modal-carta').classList.remove('ativo');
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
        // Os controles do vídeo não devem virar a página do álbum.
        if (e.target.closest('video')) return;

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
    const indiceEsquerda = estado.paginaLivroAtual;

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

    // O álbum usa uma página horizontal por vez para preservar os banners.
    paginaDireita.innerHTML = '';

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
            <video class="pagina-video" controls playsinline preload="metadata" aria-label="${pagina.titulo}">
                <source src="${pagina.arquivo}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
            <div class="pagina-titulo">${pagina.titulo}</div>
            <div class="pagina-texto">${pagina.texto}</div>
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
// SURPRESA FINAL
// ============================================================
function inicializarSurpresa() {
    $('btn-abrir-surpresa').addEventListener('click', () => {
        $('surpresa-container').style.display = 'none';
        $('surpresa-revelada').style.display = 'block';
        const carta = $('texto-surpresa-final');
        carta.innerHTML = '';
        CONFIG.mensagemSurpresa.split(/\n\s*\n/).forEach(paragrafo => {
            const elemento = document.createElement('p');
            elemento.textContent = paragrafo.trim();
            carta.appendChild(elemento);
        });

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
console.log('📸 ONDE COLOCAR AS FOTOS:');
console.log('   - Fotos do livro:     assets/fotos/     (nomeie como midia1.png, midia2.png...)');
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
