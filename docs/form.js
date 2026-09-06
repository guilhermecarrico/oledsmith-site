/* Formulário de contato do site da Oledsmith.

   Nada é enviado daqui. O site é estático: não há servidor, banco nem planilha. O que a
   pessoa escreve vira o texto de uma mensagem que ela mesma manda, pelo WhatsApp dela ou
   pelo e-mail dela. Sem JavaScript, os dois botões continuam levando ao contato — só sem
   o resumo pronto. */
(function () {
    var form = document.getElementById('ficha');
    if (!form) return;

    var WHATSAPP = '5532999171514';
    var EMAIL = 'contato@oledsmith.com.br';

    var erro = document.getElementById('f-erro');
    var botaoWhats = document.getElementById('f-whatsapp');
    var linkEmail = document.getElementById('f-email-link');

    var obrigatorios = [
        ['f-nome', 'o seu nome'],
        ['f-whats', 'o seu WhatsApp'],
        ['f-negocio', 'o que o seu negócio faz'],
        ['f-precisa', 'o que você precisa']
    ];

    function valor(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }

    function resumo() {
        var linhas = ['Vim do site da Oledsmith.', ''];
        linhas.push('Nome: ' + valor('f-nome'));
        linhas.push('WhatsApp: ' + valor('f-whats'));
        if (valor('f-email')) linhas.push('E-mail: ' + valor('f-email'));
        linhas.push('O negócio: ' + valor('f-negocio'));
        linhas.push('Preciso de: ' + valor('f-precisa'));
        if (valor('f-indicou')) linhas.push('Quem indicou: ' + valor('f-indicou'));
        return linhas.join('\n');
    }

    function conferir() {
        var faltando = [];
        obrigatorios.forEach(function (campo) {
            var el = document.getElementById(campo[0]);
            var vazio = !el.value.trim();
            el.parentNode.classList.toggle('faltando', vazio);
            if (vazio) faltando.push(campo[1]);
        });

        if (faltando.length) {
            erro.textContent = 'Falta ' + faltando.join(', ') + '.';
            erro.hidden = false;
            var primeiro = document.querySelector('.campo.faltando input, .campo.faltando select, .campo.faltando textarea');
            if (primeiro) primeiro.focus();
            return false;
        }
        erro.hidden = true;
        return true;
    }

    botaoWhats.addEventListener('click', function (evento) {
        evento.preventDefault();
        if (!conferir()) return;
        window.location.assign('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(resumo()));
    });

    linkEmail.addEventListener('click', function (evento) {
        evento.preventDefault();
        if (!conferir()) return;
        window.location.assign('mailto:' + EMAIL +
            '?subject=' + encodeURIComponent('Contato pelo site — ' + valor('f-nome')) +
            '&body=' + encodeURIComponent(resumo()));
    });

    form.addEventListener('submit', function (evento) { evento.preventDefault(); });
})();
