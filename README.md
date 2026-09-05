# oledsmith.com.br

Site da Oledsmith. Páginas estáticas em `docs/` — HTML e CSS, sem framework, sem build. O único JavaScript é o
botão de tema claro/escuro (`docs/tema.js`), que guarda a escolha no navegador de quem visita.

## Publicar

- **GitHub Pages:** Settings → Pages → branch `main`, pasta `/docs`. O arquivo `docs/CNAME` já aponta o domínio.
- **Servidor próprio:** `deploy/docker-compose.yml` sobe um nginx servindo `docs/` em `127.0.0.1:8090`; o nginx do
  host faz o proxy e o certificado (`deploy/nginx-host.conf.example`).

## Regras da casa

- Fundo preto de verdade no tema escuro; no claro, branco quente (`#f4f4f1`), nunca `#fff`.
- Nenhum emoji: ícones são SVG de traço, inline.
- Nenhum cookie, formulário ou rastreador. Contato é WhatsApp e e-mail.
