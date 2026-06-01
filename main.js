/* ==========================================================================
   1. MENU RESPONSIVO (MOBILE)
   ========================================================================== */
const btnMenuMob = document.getElementById('btn-menu-mob');
const menuMobile = document.getElementById('menu-mobile');
const btnFechar = document.getElementById('btn-fechar');
const linksMenu = document.querySelectorAll('#menu-mobile nav ul li a');

// Abrir o menu lateral
btnMenuMob.addEventListener('click', () => {
    menuMobile.classList.add('abrir');
});

// Fechar o menu ao clicar no 'X'
btnFechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir');
});

// Fechar o menu automaticamente ao clicar em uma opção de link
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('abrir');
    });
});


/* ==========================================================================
   2. CARDS EXPANSÍVEIS (SEÇÃO TECNOLOGIA)
   ========================================================================== */
function expandirCard(elementoCard) {
    // Busca se existe algum outro item já aberto para fechá-lo (efeito sanfona)
    const cardAtivoAnterior = document.querySelector('.tech-item.ativo');
    
    if (cardAtivoAnterior && cardAtivoAnterior !== elementoCard) {
        cardAtivoAnterior.classList.remove('ativo');
    }

    // Alterna a classe atual (se estiver fechado abre, se estiver aberto fecha)
    elementoCard.classList.toggle('ativo');
}


/* ==========================================================================
   3. QUIZ INTERATIVO - AGRO SUSTENTÁVEL
   ========================================================================== */
// Banco de dados de perguntas e alternativas
const bancoPerguntas = [
    {
        pergunta: "Qual tecnologia ajuda a economizar água monitorando diretamente a umidade da plantação?",
        alternativas: ["Drones de imagem", "Sensores de solo", "Tratores sem motorista", "Arado mecânico"],
        correta: 1 // Corresponde ao índice de "Sensores de solo"
    },
    {
        pergunta: "Como os drones auxiliam na preservação ambiental do agro?",
        alternativas: ["Colhendo frutos gigantes", "Aplicando insumos apenas onde há necessidade real", "Regando a fazenda inteira em segundos", "Gerando energia solar"],
        correta: 1 // Corresponde ao índice da segunda alternativa
    },
    {
        pergunta: "Qual o principal pilar do Agrinho 2026 demonstrado no site?",
        alternativas: ["Aumentar gastos no campo", "Unir tecnologia, agricultura e sustentabilidade", "Eliminar o uso de computadores", "Abandonar as áreas rurais"],
        correta: 1
    }
];

let