/*
 * assets/js/navigation.js
 */
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Verifica se os elementos essenciais existem
    if (!navToggle || !mainNav) {
        console.warn('Elementos de navegação (toggle ou menu) não encontrados.');
        return;
    }

    // Função para controlar o menu (abrir/fechar)
    const toggleMenu = (forceState) => {
        // forceState pode ser 'true' (abrir), 'false' (fechar), ou undefined (alternar)
        let shouldBeActive;
        if (forceState === true) {
            shouldBeActive = true;
        } else if (forceState === false) {
            shouldBeActive = false;
        } else {
            shouldBeActive = !mainNav.classList.contains('is-active');
        }

        mainNav.classList.toggle('is-active', shouldBeActive);
        navToggle.classList.toggle('is-active', shouldBeActive);
        navToggle.setAttribute('aria-expanded', shouldBeActive);
    };

    // Evento de clique no botão toggle
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique feche o menu imediatamente
        toggleMenu(); // Alterna o estado
    });

    // Evento de "clicar fora" para fechar o menu
    document.addEventListener('click', (event) => {
        const isMenuAtivo = mainNav.classList.contains('is-active');
        
        // Se o menu está ativo E o clique foi fora do menu
        if (isMenuAtivo && !mainNav.contains(event.target)) {
            toggleMenu(false); // Força o fechamento
        }
    });

    // (Opcional) Fechar o menu ao pressionar a tecla 'Esc'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('is-active')) {
            toggleMenu(false);
        }
    });
});