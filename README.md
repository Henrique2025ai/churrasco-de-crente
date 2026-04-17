# Churrasco de Crente

Calculadora estática para planejar churrasco brasileiro com níveis de carne, perfis de convidados, seleção de itens, lista de compras, WhatsApp e impressão/PDF pelo navegador.

## Publicação gratuita

### Cloudflare Pages

1. Crie um repositório no GitHub.
2. Envie `index.html`, `styles.css`, `script.js`, `_headers` e `README.md`.
3. No Cloudflare, abra `Workers & Pages`.
4. Crie um projeto em `Pages` conectado ao repositório.
5. Use:
   - Build command: vazio
   - Output directory: `/`
6. Publique.

### Vercel

1. Crie um repositório no GitHub.
2. Envie `index.html`, `styles.css`, `script.js`, `vercel.json` e `README.md`.
3. Importe o repositório na Vercel.
4. Como é um site estático, não precisa configurar build command.

## Segurança desta versão

- O painel administrativo foi removido da interface pública.
- Os preços são uma base interna estimada no `script.js`.
- Não há login, banco de dados nem dados sensíveis nesta fase.
- Headers básicos de segurança foram adicionados para Cloudflare Pages (`_headers`) e Vercel (`vercel.json`).

## Próxima fase segura

Para ter painel administrativo real, use Supabase com:

- Supabase Auth para login.
- Postgres para itens, preços, fontes e regras.
- Row Level Security em todas as tabelas.
- Leitura pública apenas de itens ativos.
- Escrita apenas para usuários administradores.
- Chave `service_role` somente no backend, nunca no navegador.

O arquivo `database/supabase-schema.sql` já traz uma primeira estrutura com tabelas e políticas RLS para essa fase.
