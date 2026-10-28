// Interacciones de la demostración; las transformaciones y animaciones están en CSS.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.querySelector('#nombre').value.trim();
    const message = document.querySelector('#mensaje');
    if (!name || !message.value.trim()) {
        status.textContent = 'Escribe un nombre y un mensaje con contenido.';
        return;
    }
    status.textContent = `Gracias, ${name}. Tus datos son válidos. Esta demostración no envía ni guarda mensajes.`;
});

form.addEventListener('reset', () => {
    status.textContent = '';
});

const dimensionCard = document.querySelector('.dimension-card');
dimensionCard.addEventListener('click', () => {
    const active = dimensionCard.classList.toggle('is-tilted');
    dimensionCard.setAttribute('aria-pressed', String(active));
});

document.querySelectorAll('#menu .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('#menu');
        if (menu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
