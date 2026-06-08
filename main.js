// Aguarda o documento HTML carregar totalmente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       FUNCIONALIDADE 1: MENU RESPONSIVO (HAMBÚRGUER)
       ========================================== */
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        // Liga/Desliga a classe 'active' no botão e na lista de links do menu
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando o usuário clica em algum link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });


    /* ==========================================
       FUNCIONALIDADE 2: CARDS INFORMATIVOS EXPANSÍVEIS
       ========================================== */
    // Seleciona os botões das duas áreas de cards do site
    const btnExpands = document.querySelectorAll('.btn-expand, .btn-card-more');

    btnExpands.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o elemento com o texto oculto que fica logo antes ou dentro do bloco do card
            const cardBody = button.parentElement;
            const expandedContent = cardBody.querySelector('.expanded-content, .card-more-content');

            // Alterna a classe que muda a altura máxima (max-height) no CSS
            expandedContent.classList.toggle('open');

            // Muda o texto do botão para indicar o estado
            if (expandedContent.classList.contains('open')) {
                button.textContent = 'Ver Menos';
            } else {
                button.textContent = button.classList.contains('btn-expand') ? 'Ver Detalhes' : 'Ler mais';
            }
        });
    });


    /* ==========================================
       FUNCIONALIDADE 3: CALCULADORA ECOLÓGICA SIMPLES
       ========================================== */
    const btnCalcular = document.getElementById('btnCalcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultadoCalc');
    const textoResultado = document.getElementById('textoResultado');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples para conferir se o usuário digitou um número correto
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, digite um número válido de hectares.');
            return;
        }

        // Regra de cálculo fictícia/simulada:
        // Uma irrigação tradicional gasta muita água. A automação economiza em média 15.000 litros diários por hectare!
        const economiaDiaria = hectares * 15000;
        const economiaMensal = economiaDiaria * 30;

        // Formatação dos números para o padrão de leitura brasileiro (com pontos)
        const diariaFormatada = economiaDiaria.toLocaleString('pt-BR');
        const mensalFormatada = economiaMensal.toLocaleString('pt-BR');

        // Insere a resposta customizada na caixa de resultado do HTML
        textoResultado.innerHTML = `Adotando sensores digitais e gotejamento em sua plantação de <strong>${hectares} hectares</strong>, a economia estimada será de:<br><br>
        💧 <strong>${diariaFormatada} Litros</strong> de água por dia.<br>
        🌍 <strong>${mensalFormatada} Litros</strong> de água poupados em um mês!<br><br>
        <em>Tecnologia é eficiência!</em>`;

        // Torna a caixinha de resultado visível removendo a classe 'hidden' do CSS
        resultadoBox.classList.remove('hidden');
    });
});