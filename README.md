# PSI — Auxiliar de Escrevente · Cartório Pantaneiro
Processo Seletivo Interno · Genthe Consultoria em Gestão de Pessoas

---

## Arquivos

| Arquivo              | Função                                              |
|----------------------|-----------------------------------------------------|
| index.html           | Formulário do candidato (URL raiz)                  |
| admin.html           | Painel administrativo (URL /admin)                  |
| build.js             | Script que injeta as env vars nos HTMLs             |
| package.json         | Configuração do build                               |
| vercel.json          | Configuração de rotas e build do Vercel             |
| supabase-setup.sql   | SQL para criar a tabela no Supabase                 |

---

## PASSO 1 — Criar o projeto no Supabase

1. Acesse https://supabase.com e faça login
2. Clique em "New project"
3. Dê um nome (ex: psi-cartorio) e crie o projeto
4. Vá em **SQL Editor → New Query**
5. Cole o conteúdo do arquivo `supabase-setup.sql` e clique em **Run**
6. Vá em **Project Settings → API** e copie:
   - **Project URL** → será a variável `SUPABASE_URL`
   - **anon / public key** → será a variável `SUPABASE_ANON_KEY`

---

## PASSO 2 — Subir os arquivos no GitHub

1. Acesse https://github.com e crie um repositório novo (pode ser privado)
2. Faça upload de TODOS os arquivos desta pasta:
   - index.html
   - admin.html
   - build.js
   - package.json
   - vercel.json
   - supabase-setup.sql (opcional, só para referência)
3. Confirme o commit

---

## PASSO 3 — Deploy no Vercel

1. Acesse https://vercel.com e clique em **Add New Project**
2. Importe o repositório que você criou no GitHub
3. Antes de clicar em Deploy, expanda **Environment Variables** e adicione as 3 variáveis:

   | Nome               | Valor                                      |
   |--------------------|--------------------------------------------|
   | SUPABASE_URL       | (cole a Project URL do Supabase)           |
   | SUPABASE_ANON_KEY  | (cole a anon/public key do Supabase)       |
   | ADMIN_PASSWORD     | (escolha uma senha para o painel admin)    |

4. Clique em **Deploy**

Pronto. O Vercel vai executar `npm run build`, injetar as variáveis nos HTMLs e publicar.

---

## URLs após o deploy

- **Formulário (candidato):** https://seu-projeto.vercel.app/
- **Painel admin:**           https://seu-projeto.vercel.app/admin

---

## Como usar o painel

1. Acesse `/admin` e informe a senha definida em `ADMIN_PASSWORD`
2. As inscrições aparecem em ordem de chegada (mais recentes primeiro)
3. Clique no nome do candidato para expandir todas as respostas por seção
4. Use a busca para filtrar por nome, cargo ou setor
5. Clique em **Exportar CSV** para baixar todas as respostas em planilha Excel

---

## Para atualizar as credenciais depois

No Vercel: **Project → Settings → Environment Variables**
Altere o valor e faça um novo deploy (Deployments → Redeploy).

---

Elaborado por Genthe Consultoria em Gestão de Pessoas
Revisado por Dr. Rodrigo Paulucci Santos — Tabelião Titular
contato@genthe.com.br · genthe.com.br · 2026
