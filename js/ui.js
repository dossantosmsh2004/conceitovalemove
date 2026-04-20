// js/ui.js - Controle da Interface
const ui = {
    renderView: (viewId) => {
        const container = document.getElementById('main-content');
        console.log("Navegando para:", viewId);
        // Lógica de switch/case para carregar seções
    },
    updateStatus: (msg) => {
        console.log("Status:", msg);
    }
};
