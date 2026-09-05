// Tema claro/escuro. Roda no <head>, antes do primeiro paint, para não piscar.
// Guarda a escolha só no navegador de quem visita (localStorage, não cookie).
(function () {
    var KEY = 'oledsmith-tema', root = document.documentElement;
    try { if (localStorage.getItem(KEY) === 'light') { root.dataset.theme = 'light'; } } catch (e) { /* sem storage */ }
    function meta(claro) {
        var m = document.querySelector('meta[name="theme-color"]');
        if (m) { m.content = claro ? '#f4f4f1' : '#000000'; }
    }
    document.addEventListener('DOMContentLoaded', function () {
        var b = document.getElementById('tema');
        if (!b) { return; }
        meta(root.dataset.theme === 'light');
        b.addEventListener('click', function () {
            var claro = root.dataset.theme !== 'light';
            if (claro) { root.dataset.theme = 'light'; } else { delete root.dataset.theme; }
            try { localStorage.setItem(KEY, claro ? 'light' : 'dark'); } catch (e) { /* sem storage */ }
            meta(claro);
        });
    });
})();
