// js/main.js - Inicializador
document.addEventListener('DOMContentLoaded', () => {
    console.log("ValeMove: Sistema Iniciado.");
    
    // Inicializa ícones Lucide
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Inicia na View Principal
    ui.renderView('dashboard');
});
