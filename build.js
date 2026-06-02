<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Genthe Consultoria — Processo Seletivo Interno · Auxiliar de Escrevente – Notas">
<meta name="theme-color" content="#1B5E37">
<title>Genthe — Auxiliar de Escrevente · Cartório Pantaneiro</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --verde:   #1B5E37;
    --verde-m: #2E7D52;
    --verde-l: #4CAF80;
    --ouro:    #B8943A;
    --ouro-l:  #D4AC50;
    --creme:   #F5F2EC;
    --creme-d: #EAE5DB;
    --text:    #1A1A1A;
    --muted:   #6B6B6B;
    --border:  #D8D2C6;
    --white:   #FFFFFF;
    --erro:    #C0392B;
    --sucesso: #1B5E37;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--creme);
    color: var(--text);
    min-height: 100vh;
    line-height: 1.6;
  }

  /* HEADER */
  .header {
    background: var(--verde);
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .header::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 4px;
    background: var(--ouro);
  }
  .header-inner {
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .header-logos {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    margin-top: 4px;
  }
  .logo-cartorio, .logo-genthe {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
  .logo-cartorio-txt, .logo-genthe-txt {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: rgba(255,255,255,0.55);
    text-align: center;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .logo-sep {
    width: 1px;
    height: 44px;
    background: rgba(255,255,255,0.18);
  }
  .header-meta { flex: 1; }
  .header-empresa {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin-bottom: 4px;
  }
  .header-titulo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.75rem;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 6px;
  }
  .header-subtitulo {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    font-weight: 300;
  }
  .header-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(184,148,58,0.25);
    border: 1px solid rgba(184,148,58,0.45);
    color: var(--ouro-l);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    padding: 3px 10px;
    border-radius: 20px;
    margin-top: 10px;
  }

  /* INTRO CARD */
  .intro-card {
    max-width: 720px;
    margin: 1.75rem auto 0;
    padding: 0 1.5rem;
  }
  .card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 1.5rem 1.75rem;
    margin-bottom: 1.25rem;
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--creme-d);
  }
  .etapa-num {
    width: 30px;
    height: 30px;
    background: var(--verde);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    flex-shrink: 0;
  }
  .card-titulo {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--verde);
  }
  .card-desc {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.6;
  }

  /* VAGA INFO */
  .vaga-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 1rem;
  }
  .vaga-item {
    background: var(--creme);
    border-radius: 8px;
    padding: 0.65rem 0.9rem;
  }
  .vaga-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ouro);
    margin-bottom: 2px;
  }
  .vaga-val {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text);
  }

  /* FORMULÁRIO */
  .form-wrap {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 1.5rem 3rem;
  }

  .secao-titulo {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ouro);
    margin: 2rem 0 0.75rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .secao-titulo::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .pergunta-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 0.875rem;
    transition: border-color 0.15s;
  }
  .pergunta-card:focus-within { border-color: var(--verde-m); }
  .pergunta-card.erro { border-color: var(--erro); }

  .pergunta-label {
    font-size: 0.925rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 0.1rem;
    line-height: 1.45;
  }
  .pergunta-hint {
    font-size: 0.78rem;
    color: var(--muted);
    margin-bottom: 0.85rem;
  }
  .obrig { color: var(--erro); font-size: 0.8rem; margin-left: 2px; }

  /* RADIO / CHECKBOX */
  .opcoes { display: flex; flex-direction: column; gap: 7px; }
  .opcao {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 0.6rem 0.85rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
    font-size: 0.875rem;
    color: var(--text);
    user-select: none;
  }
  .opcao:hover { background: var(--creme); border-color: var(--verde-l); }
  .opcao input { margin-top: 2px; accent-color: var(--verde); flex-shrink: 0; }
  .opcao.selecionada { background: #EBF5EF; border-color: var(--verde-m); }

  /* TEXT AREA */
  textarea {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.7rem 0.9rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem;
    color: var(--text);
    background: var(--white);
    resize: vertical;
    min-height: 90px;
    outline: none;
    transition: border-color 0.15s;
    line-height: 1.55;
  }
  textarea:focus { border-color: var(--verde-m); }
  textarea::placeholder { color: #AEAAA2; }

  /* TEXT INPUT */
  input[type="text"], input[type="email"] {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.65rem 0.9rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem;
    color: var(--text);
    background: var(--white);
    outline: none;
    transition: border-color 0.15s;
  }
  input[type="text"]:focus, input[type="email"]:focus { border-color: var(--verde-m); }
  input::placeholder { color: #AEAAA2; }

  /* ERRO MSG */
  .erro-msg {
    font-size: 0.78rem;
    color: var(--erro);
    margin-top: 5px;
    display: none;
  }
  .pergunta-card.erro .erro-msg { display: block; }

  /* ESCALA LIKERT */
  .likert-wrap { display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap; }
  .likert-btn {
    flex: 1;
    min-width: 36px;
    padding: 0.5rem 0.3rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--white);
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--muted);
    text-align: center;
    transition: all 0.12s;
  }
  .likert-btn:hover { border-color: var(--verde-l); color: var(--verde); }
  .likert-btn.ativo { background: var(--verde); border-color: var(--verde); color: #fff; }
  .likert-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--muted);
    margin-top: 4px;
  }

  /* SUBMIT */
  .submit-area {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .btn-enviar {
    background: var(--verde);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.9rem 2.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    letter-spacing: 0.02em;
  }
  .btn-enviar:hover { background: var(--verde-m); }
  .btn-enviar:active { transform: scale(0.98); }
  .btn-enviar:disabled { background: #9E9E9E; cursor: not-allowed; }
  .submit-nota {
    font-size: 0.78rem;
    color: var(--muted);
    text-align: center;
    max-width: 440px;
  }

  /* CONFIRMAÇÃO */
  .confirmacao {
    display: none;
    max-width: 520px;
    margin: 4rem auto;
    padding: 1.5rem;
    text-align: center;
  }
  .check-circle {
    width: 64px;
    height: 64px;
    background: #EBF5EF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;
  }
  .check-circle svg { width: 32px; height: 32px; stroke: var(--verde); stroke-width: 2.5; fill: none; }
  .conf-titulo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    color: var(--verde);
    margin-bottom: 0.5rem;
  }
  .conf-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.65; }

  /* PROGRESS */
  .progress-bar {
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    background: var(--ouro);
    transition: width 0.3s ease;
    z-index: 100;
    width: 0%;
  }

  /* FOOTER */
  .footer {
    background: var(--verde);
    padding: 1.25rem 1.5rem;
    text-align: center;
    margin-top: 2rem;
  }
  .footer p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.5);
  }
  .footer strong { color: rgba(255,255,255,0.8); }

  /* LGPD */
  .lgpd-banner {
    max-width: 720px;
    margin: 0 auto 0;
    padding: 0 1.5rem;
  }
  .lgpd-box {
    background: #F0F5FF;
    border: 1px solid #B8CBF0;
    border-left: 4px solid #2E5FBF;
    border-radius: 10px;
    padding: 1rem 1.25rem;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .lgpd-icon {
    font-size: 1.35rem;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .lgpd-titulo {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1A3A80;
    letter-spacing: 0.04em;
    margin-bottom: 4px;
  }
  .lgpd-texto {
    font-size: 0.8rem;
    color: #2C4080;
    line-height: 1.6;
  }
  .lgpd-check-wrap {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: #F0F5FF;
    border: 1px solid #B8CBF0;
    border-radius: 10px;
    padding: 1rem 1.25rem;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }
  .lgpd-check-wrap input[type="checkbox"] {
    margin-top: 3px;
    accent-color: #2E5FBF;
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .lgpd-check-label {
    font-size: 0.85rem;
    color: #1A3A80;
    line-height: 1.55;
    cursor: pointer;
  }
  .lgpd-check-label strong { color: #2E5FBF; }
  .lgpd-check-wrap.erro-lgpd { border-color: var(--erro); background: #FEF0F0; }
  .lgpd-check-wrap.erro-lgpd .lgpd-check-label { color: #8B0000; }
  .lgpd-erro-msg { font-size: 0.78rem; color: var(--erro); margin-top: 6px; display: none; }
  .lgpd-check-wrap.erro-lgpd + .lgpd-erro-msg { display: block; }
  .req-table { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; margin-top: 0.25rem; }
  .req-row { display: grid; grid-template-columns: 1fr 1.5fr; font-size: 0.83rem; }
  .req-header { background: var(--verde); color: #fff; font-weight: 600; font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; }
  .req-col-a, .req-col-b { padding: 0.55rem 0.8rem; line-height: 1.45; }
  .req-col-a { border-right: 1px solid var(--border); color: var(--text); font-weight: 500; }
  .req-header .req-col-a { border-right: 1px solid rgba(255,255,255,0.2); color: #fff; }
  .req-col-b { color: var(--muted); }
  .req-alt { background: var(--creme); }
  .req-row + .req-row { border-top: 1px solid var(--border); }

  /* ETAPAS DO PSI */
  .etapas-lista { display: flex; flex-direction: column; gap: 0; }
  .etapa-item { display: flex; align-items: flex-start; gap: 10px; padding: 0.65rem 0; border-bottom: 1px solid var(--creme-d); }
  .etapa-item:last-child { border-bottom: none; }
  .etapa-num-sm {
    width: 26px; height: 26px; min-width: 26px;
    background: var(--verde); color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700; margin-top: 1px;
  }
  .etapa-num-cinza { background: #C8C5BD !important; }
  .etapa-nome { font-size: 0.875rem; font-weight: 500; color: var(--text); line-height: 1.3; }
  .etapa-detalhe { font-size: 0.78rem; color: var(--muted); margin-top: 2px; line-height: 1.45; }
  .etapa-tag {
    display: inline-block;
    background: #EBF5EF; color: var(--verde-m);
    font-size: 10px; font-weight: 600; padding: 1px 7px;
    border-radius: 20px; margin-left: 5px; vertical-align: middle;
    border: 1px solid #B8DEC8;
  }
  .etapa-ativa .etapa-num-sm { background: var(--verde); }

  @media (max-width: 540px) {
    .header-titulo { font-size: 1.4rem; }
    .vaga-grid { grid-template-columns: 1fr; }
    .likert-btn { font-size: 0.7rem; padding: 0.45rem 0.2rem; }
    .req-row { grid-template-columns: 1fr; }
    .req-col-a { border-right: none; border-bottom: 1px solid var(--border); }
  }
</style>
<!-- Supabase config — preenchido pelo Vercel via env vars -->
<script>
  const SUPABASE_URL      = '%%SUPABASE_URL%%';
  const SUPABASE_ANON_KEY = '%%SUPABASE_ANON_KEY%%';
</script>
</head>
<body>

<div class="progress-bar" id="progress"></div>

<!-- HEADER -->
<header class="header">
  <div class="header-inner">
    <div class="header-logos">
      <div class="logo-cartorio">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="var(--ouro-l)" stroke-width="1.8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span class="logo-cartorio-txt">Cartório<br>Pantaneiro</span>
      </div>
      <div class="logo-sep"></div>
      <div class="logo-genthe">
        <svg viewBox="0 0 32 32" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="13" fill="none" stroke="var(--ouro-l)" stroke-width="1.6"/>
          <text x="16" y="20.5" text-anchor="middle" font-family="DM Serif Display, serif" font-size="11" fill="var(--ouro-l)">G</text>
        </svg>
        <span class="logo-genthe-txt">Genthe<br>Consultoria</span>
      </div>
    </div>
    <div class="header-meta">
      <div class="header-empresa">Cartório Pantaneiro · Programa Notariado+ Carreiras</div>
      <h1 class="header-titulo">Auxiliar de Escrevente<br><em>Setor de Notas</em></h1>
      <div class="header-subtitulo">Processo Seletivo Interno — Formulário de Candidatura</div>
      <div class="header-badge">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Tempo estimado: 12 a 15 minutos
      </div>
    </div>
  </div>
</header>

<!-- INTRO -->
<div class="intro-card">
  <div class="card">
    <div class="card-header">
      <div style="width:30px;height:30px;background:var(--ouro);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      </div>
      <span class="card-titulo">Sobre a vaga</span>
    </div>
    <p class="card-desc">
      O <strong>Auxiliar de Escrevente – Notas</strong> atua no <strong>Setor de Notas</strong>, dentro do departamento de <strong>Notas e Atendimento</strong>, dando suporte direto ao Escrevente nas atividades de processamento, organização e controle dos atos notariais.
    </p>
    <p class="card-desc" style="margin-top:0.65rem;">
      O cargo envolve a preparação de dossiês para lavratura de escrituras e demais atos do Tabelionato — como escrituras de compra e venda, doação, inventário, procuração, testamento e divórcio — além do controle do arquivo físico e digital, digitalização de documentos, conferência de certidões e lançamento de dados nos sistemas internos, sempre sob supervisão técnica do Escrevente.
    </p>
    <p class="card-desc" style="margin-top:0.65rem;">
      A vaga é aberta para colaboradores que buscam crescimento dentro do cartório, com perspectiva de evolução para o cargo de Escrevente conforme desenvolvimento técnico e desempenho comprovado.
    </p>
    <div class="vaga-grid">
      <div class="vaga-item">
        <div class="vaga-label">Departamento</div>
        <div class="vaga-val">Notas e Atendimento</div>
      </div>
      <div class="vaga-item">
        <div class="vaga-label">Setor</div>
        <div class="vaga-val">Notas</div>
      </div>
      <div class="vaga-item">
        <div class="vaga-label">Superior Imediato</div>
        <div class="vaga-val">Tabelião Substituto – Notas</div>
      </div>
      <div class="vaga-item">
        <div class="vaga-label">Nível de entrada</div>
        <div class="vaga-val">Auxiliar · Grade a definir</div>
      </div>
    </div>
    <div style="margin-top:0.85rem;padding:0.65rem 0.9rem;background:#FFF8EC;border-left:3px solid var(--ouro);border-radius:0 6px 6px 0;">
      <p style="font-size:0.8rem;color:#7A5C1E;line-height:1.55;"><strong style="color:var(--ouro);">Grade salarial:</strong> A grade e o nível exatos serão definidos após análise do perfil do candidato selecionado, conforme o Plano de Cargos e Salários vigente do Cartório Pantaneiro.</p>
    </div>
  </div>

  <!-- REQUISITOS DE ELEGIBILIDADE -->
  <div class="card">
    <div class="card-header">
      <div style="width:30px;height:30px;background:var(--verde);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <span class="card-titulo">Requisitos para participar</span>
    </div>
    <p class="card-desc" style="margin-bottom:0.85rem;">Para participar do PSI, o colaborador deve atender, <strong>cumulativamente</strong>, a todos os requisitos abaixo na data de encerramento das inscrições:</p>
    <div class="req-table">
      <div class="req-row req-header">
        <div class="req-col-a">Requisito</div>
        <div class="req-col-b">Critério</div>
      </div>
      <div class="req-row">
        <div class="req-col-a">Tempo mínimo no cargo atual</div>
        <div class="req-col-b">6 meses ou mais</div>
      </div>
      <div class="req-row req-alt">
        <div class="req-col-a">Avaliação de desempenho</div>
        <div class="req-col-b">Conceito "Atende" ou superior na última avaliação formal</div>
      </div>
      <div class="req-row">
        <div class="req-col-a">Situação funcional</div>
        <div class="req-col-b">Sem advertência ativa nos últimos 6 meses</div>
      </div>
      <div class="req-row req-alt">
        <div class="req-col-a">Assiduidade</div>
        <div class="req-col-b">Ausências injustificadas: máximo 2 nos últimos 6 meses</div>
      </div>
      <div class="req-row">
        <div class="req-col-a">Requisitos do cargo alvo</div>
        <div class="req-col-b">Atendimento à formação e experiência mínima descritas no perfil do cargo</div>
      </div>
    </div>
  </div>

  <!-- ETAPAS DO PSI -->
  <div class="card">
    <div class="card-header">
      <div style="width:30px;height:30px;background:var(--verde);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
      </div>
      <span class="card-titulo">Como funciona o processo seletivo</span>
    </div>
    <p class="card-desc" style="margin-bottom:0.85rem;">O PSI é composto por <strong>sete etapas sequenciais</strong>. A eliminação em qualquer etapa encerra a participação do candidato no processo em curso. <strong>Este formulário corresponde às etapas 1, 2 e 5.</strong></p>
    <div class="etapas-lista">
      <div class="etapa-item etapa-ativa">
        <div class="etapa-num-sm">01</div>
        <div class="etapa-info">
          <div class="etapa-nome">Inscrição interna <span class="etapa-tag">neste formulário</span></div>
          <div class="etapa-detalhe">Colaborador manifesta interesse pela vaga dentro do prazo estabelecido no edital.</div>
        </div>
      </div>
      <div class="etapa-item etapa-ativa">
        <div class="etapa-num-sm">02</div>
        <div class="etapa-info">
          <div class="etapa-nome">Análise de perfil <span class="etapa-tag">neste formulário</span></div>
          <div class="etapa-detalhe">Verificação dos critérios de elegibilidade e aderência ao perfil do cargo.</div>
        </div>
      </div>
      <div class="etapa-item">
        <div class="etapa-num-sm etapa-num-cinza">03</div>
        <div class="etapa-info">
          <div class="etapa-nome">Prova técnica</div>
          <div class="etapa-detalhe">Avaliação de conhecimentos específicos exigidos pelo cargo.</div>
        </div>
      </div>
      <div class="etapa-item">
        <div class="etapa-num-sm etapa-num-cinza">04</div>
        <div class="etapa-info">
          <div class="etapa-nome">Entrevista</div>
          <div class="etapa-detalhe">Entrevista estruturada com Gestão de Pessoas e Liderança do departamento receptor.</div>
        </div>
      </div>
      <div class="etapa-item etapa-ativa">
        <div class="etapa-num-sm">05</div>
        <div class="etapa-info">
          <div class="etapa-nome">Avaliação comportamental <span class="etapa-tag">neste formulário</span></div>
          <div class="etapa-detalhe">Mapeamento de perfil comportamental e verificação de fit cultural.</div>
        </div>
      </div>
      <div class="etapa-item">
        <div class="etapa-num-sm etapa-num-cinza">06</div>
        <div class="etapa-info">
          <div class="etapa-nome">Período de experiência</div>
          <div class="etapa-detalhe">Atuação prática na nova função sob acompanhamento estruturado da liderança.</div>
        </div>
      </div>
      <div class="etapa-item">
        <div class="etapa-num-sm etapa-num-cinza">07</div>
        <div class="etapa-info">
          <div class="etapa-nome">Feedback final</div>
          <div class="etapa-detalhe">Devolutiva formal a todos os candidatos, com pontos fortes e oportunidades de desenvolvimento.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- LGPD BANNER -->
<div class="lgpd-banner" style="margin-top:1.25rem;">
  <div class="lgpd-box">
    <div class="lgpd-icon">🔒</div>
    <div>
      <div class="lgpd-titulo">Proteção de Dados — LGPD</div>
      <p class="lgpd-texto">As informações fornecidas neste questionário serão utilizadas <strong>exclusivamente para fins de seleção e recrutamento</strong>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Seus dados serão armazenados com segurança, não serão compartilhados com terceiros sem sua autorização e poderão ser solicitados para exclusão a qualquer momento pelo e-mail <strong>contato@genthe.com.br</strong>.</p>
    </div>
  </div>
</div>

<!-- FORMULÁRIO -->
<div class="form-wrap">
  <form id="formPSI" novalidate>

    <!-- ── ETAPA 1 — INSCRIÇÃO INTERNA ── -->
    <div class="secao-titulo">
      <span style="background:var(--verde);color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0;">1</span>
      Inscrição interna
    </div>

    <div class="pergunta-card" id="q-nome">
      <div class="pergunta-label">Nome completo <span class="obrig">*</span></div>
      <input type="text" name="nome" placeholder="Seu nome completo" autocomplete="name">
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-cargo-atual">
      <div class="pergunta-label">Cargo atual <span class="obrig">*</span></div>
      <input type="text" name="cargo_atual" placeholder="Ex.: Recepcionista, Auxiliar Administrativo...">
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-setor-atual">
      <div class="pergunta-label">Departamento / setor atual <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="setor_atual" value="Notas e Atendimento"> Notas e Atendimento</label>
        <label class="opcao"><input type="radio" name="setor_atual" value="TDPJ e Atendimento"> TDPJ e Atendimento</label>
        <label class="opcao"><input type="radio" name="setor_atual" value="Administrativo"> Administrativo</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-tempo">
      <div class="pergunta-label">Há quanto tempo você trabalha no Cartório Pantaneiro? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="tempo_casa" value="menos_6m"> Menos de 6 meses</label>
        <label class="opcao"><input type="radio" name="tempo_casa" value="6m_1a"> Entre 6 meses e 1 ano</label>
        <label class="opcao"><input type="radio" name="tempo_casa" value="1a_2a"> Entre 1 e 2 anos</label>
        <label class="opcao"><input type="radio" name="tempo_casa" value="mais_2a"> Mais de 2 anos</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-motivo">
      <div class="pergunta-label">Por que você está se candidatando a esta vaga? <span class="obrig">*</span></div>
      <div class="pergunta-hint">Descreva sua motivação de forma objetiva.</div>
      <textarea name="motivo" placeholder="Escreva aqui..." rows="4"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-formacao">
      <div class="pergunta-label">Qual a sua formação atual? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="formacao" value="em_completo"> Ensino Médio completo</label>
        <label class="opcao"><input type="radio" name="formacao" value="sup_cursando"> Ensino Superior em andamento</label>
        <label class="opcao"><input type="radio" name="formacao" value="sup_completo"> Ensino Superior completo</label>
        <label class="opcao"><input type="radio" name="formacao" value="pos"> Pós-graduação / especialização</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-curso">
      <div class="pergunta-label">Se estiver cursando Direito ou área administrativa, informe o curso e o período.</div>
      <div class="pergunta-hint">Deixe em branco se não se aplicar.</div>
      <input type="text" name="curso" placeholder="Ex.: Direito — 4º semestre (UFMS)">
    </div>

    <!-- ── ETAPA 2 — ANÁLISE DE PERFIL ── -->
    <div class="secao-titulo">
      <span style="background:var(--verde);color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0;">2</span>
      Análise de perfil e requisitos
    </div>

    <div class="pergunta-card" id="q-exp-documental">
      <div class="pergunta-label">Você já trabalhou com organização e controle de documentos físicos ou digitais? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="exp_documental" value="sim_cartorio"> Sim, em cartório ou serviço notarial</label>
        <label class="opcao"><input type="radio" name="exp_documental" value="sim_outro"> Sim, em outra área (jurídica, administrativa, saúde etc.)</label>
        <label class="opcao"><input type="radio" name="exp_documental" value="nao"> Não tenho experiência formal nessa atividade</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-exp_detalhe">
      <div class="pergunta-label">Se tiver experiência com documentação ou rotinas de arquivo, descreva brevemente.</div>
      <div class="pergunta-hint">Informe o contexto, o tipo de documento e as tarefas que realizava. Deixe em branco se não tiver.</div>
      <textarea name="exp_detalhe" placeholder="Ex.: Organizei prontuários físicos em clínica médica por 8 meses, usando numeração sequencial e digitalização mensal..." rows="3"></textarea>
    </div>

    <div class="pergunta-card" id="q-atos">
      <div class="pergunta-label">Quais dos atos notariais a seguir você conhece, mesmo que superficialmente? <span class="obrig">*</span></div>
      <div class="pergunta-hint">Selecione todos que se aplicam.</div>
      <div class="opcoes">
        <label class="opcao"><input type="checkbox" name="atos" value="procuracao"> Procuração</label>
        <label class="opcao"><input type="checkbox" name="atos" value="compra_venda"> Escritura de compra e venda</label>
        <label class="opcao"><input type="checkbox" name="atos" value="doacao"> Escritura de doação</label>
        <label class="opcao"><input type="checkbox" name="atos" value="inventario"> Inventário extrajudicial</label>
        <label class="opcao"><input type="checkbox" name="atos" value="testamento"> Testamento</label>
        <label class="opcao"><input type="checkbox" name="atos" value="divorcio"> Divórcio extrajudicial</label>
        <label class="opcao"><input type="checkbox" name="atos" value="nenhum"> Não conheço nenhum desses atos</label>
      </div>
      <div class="erro-msg">Selecione pelo menos uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-informatica">
      <div class="pergunta-label">Como você avalia seu domínio de informática (Windows, digitação, e-mail, scanner)? <span class="obrig">*</span></div>
      <div class="pergunta-hint">1 = Muito básico / 5 = Avançado</div>
      <div class="likert-wrap" id="likert-info" data-name="informatica">
        <button type="button" class="likert-btn" data-val="1">1</button>
        <button type="button" class="likert-btn" data-val="2">2</button>
        <button type="button" class="likert-btn" data-val="3">3</button>
        <button type="button" class="likert-btn" data-val="4">4</button>
        <button type="button" class="likert-btn" data-val="5">5</button>
      </div>
      <div class="likert-labels"><span>Muito básico</span><span>Avançado</span></div>
      <input type="hidden" name="informatica" id="val-informatica">
      <div class="erro-msg">Selecione um nível.</div>
    </div>

    <div class="pergunta-card" id="q-prazos">
      <div class="pergunta-label">Como você costuma lidar com múltiplas tarefas e prazos simultâneos? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="prazos" value="a"> Crio listas e priorizo conforme urgência e importância</label>
        <label class="opcao"><input type="radio" name="prazos" value="b"> Resolvo por ordem de chegada, independente da urgência</label>
        <label class="opcao"><input type="radio" name="prazos" value="c"> Peço orientação ao meu superior para definir prioridades</label>
        <label class="opcao"><input type="radio" name="prazos" value="d"> Ainda estou desenvolvendo essa habilidade de organização</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-erro">
      <div class="pergunta-label">Descreva uma situação em que você cometeu um erro no trabalho e como agiu para corrigi-lo. <span class="obrig">*</span></div>
      <div class="pergunta-hint">Seja objetivo. Não há resposta certa — o que buscamos é consciência e postura responsável.</div>
      <textarea name="erro" placeholder="Escreva aqui..." rows="4"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-certidoes">
      <div class="pergunta-label">Você já realizou coleta ou conferência de certidões (negativas, de ônus reais, CND etc.)? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="certidoes" value="sim_freq"> Sim, com frequência</label>
        <label class="opcao"><input type="radio" name="certidoes" value="sim_pouco"> Sim, algumas vezes</label>
        <label class="opcao"><input type="radio" name="certidoes" value="nao_sei"> Não, mas sei o que são e para que servem</label>
        <label class="opcao"><input type="radio" name="certidoes" value="nao"> Não e não tenho conhecimento sobre o tema</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-dev">
      <div class="pergunta-label">O que você está fazendo hoje para se desenvolver para um cargo técnico em cartório de notas? <span class="obrig">*</span></div>
      <div class="pergunta-hint">Pode mencionar cursos, leituras, observação do trabalho do setor, conversas com colegas etc.</div>
      <textarea name="desenvolvimento" placeholder="Escreva aqui..." rows="3"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <!-- ── ETAPA 5 — AVALIAÇÃO COMPORTAMENTAL ── -->
    <div class="secao-titulo">
      <span style="background:var(--verde);color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0;">5</span>
      Avaliação comportamental
    </div>

    <div class="card" style="margin-bottom:0.875rem;border-left:3px solid var(--ouro);">
      <p style="font-size:0.83rem;color:var(--muted);line-height:1.6;">Nesta seção não há respostas certas ou erradas. Responda com honestidade sobre como você realmente pensa e age no dia a dia. As respostas são tratadas de forma sigilosa e integram o parecer final da Genthe Consultoria.</p>
    </div>

    <div class="pergunta-card" id="q-val-1">
      <div class="pergunta-label">Para você, o que significa tratar o cliente com respeito em um cartório? <span class="obrig">*</span></div>
      <textarea name="val_respeito" placeholder="Escreva aqui..." rows="3"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-val-2">
      <div class="pergunta-label">Avalie seu nível de comprometimento com prazos e qualidade, de forma geral. <span class="obrig">*</span></div>
      <div class="pergunta-hint">1 = Preciso melhorar muito / 5 = Ponto forte consistente</div>
      <div class="likert-wrap" id="likert-comp" data-name="comprometimento">
        <button type="button" class="likert-btn" data-val="1">1</button>
        <button type="button" class="likert-btn" data-val="2">2</button>
        <button type="button" class="likert-btn" data-val="3">3</button>
        <button type="button" class="likert-btn" data-val="4">4</button>
        <button type="button" class="likert-btn" data-val="5">5</button>
      </div>
      <div class="likert-labels"><span>Preciso melhorar</span><span>Ponto forte</span></div>
      <input type="hidden" name="comprometimento" id="val-comprometimento">
      <div class="erro-msg">Selecione um nível.</div>
    </div>

    <div class="pergunta-card" id="q-val-3">
      <div class="pergunta-label">Descreva uma situação em que você precisou trabalhar em equipe para resolver um problema ou entregar um resultado. <span class="obrig">*</span></div>
      <div class="pergunta-hint">O que aconteceu? Qual foi o seu papel? Como foi o resultado?</div>
      <textarea name="trabalho_equipe" placeholder="Escreva aqui..." rows="4"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-val-4">
      <div class="pergunta-label">Em situações de alta demanda, como você costuma reagir? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="alta_demanda" value="a"> Mantenho o ritmo e a qualidade mesmo sob pressão</label>
        <label class="opcao"><input type="radio" name="alta_demanda" value="b"> Fico mais acelerado e posso cometer mais erros, mas me corrijo</label>
        <label class="opcao"><input type="radio" name="alta_demanda" value="c"> Comunico ao superior quando estou sobrecarregado e peço apoio</label>
        <label class="opcao"><input type="radio" name="alta_demanda" value="d"> Costumo priorizar a velocidade em detrimento da precisão</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-val-5">
      <div class="pergunta-label">Como você recebe críticas ou correções sobre o seu trabalho? <span class="obrig">*</span></div>
      <div class="opcoes">
        <label class="opcao"><input type="radio" name="feedback" value="a"> Recebo bem, pergunto como melhorar e aplico o que aprendo</label>
        <label class="opcao"><input type="radio" name="feedback" value="b"> Aceito, mas levo um tempo para processar antes de agir</label>
        <label class="opcao"><input type="radio" name="feedback" value="c"> Depende de como a crítica é dada; o tom importa para mim</label>
        <label class="opcao"><input type="radio" name="feedback" value="d"> Tenho dificuldade em receber críticas, reconheço que é algo a desenvolver</label>
      </div>
      <div class="erro-msg">Selecione uma opção.</div>
    </div>

    <div class="pergunta-card" id="q-val-6">
      <div class="pergunta-label">O trabalho notarial exige precisão e atenção a detalhes acima da média. Como você se avalia nesse quesito? <span class="obrig">*</span></div>
      <div class="pergunta-hint">1 = Preciso desenvolver / 5 = Ponto muito forte</div>
      <div class="likert-wrap" id="likert-atencao" data-name="atencao_detalhe">
        <button type="button" class="likert-btn" data-val="1">1</button>
        <button type="button" class="likert-btn" data-val="2">2</button>
        <button type="button" class="likert-btn" data-val="3">3</button>
        <button type="button" class="likert-btn" data-val="4">4</button>
        <button type="button" class="likert-btn" data-val="5">5</button>
      </div>
      <div class="likert-labels"><span>Preciso desenvolver</span><span>Ponto muito forte</span></div>
      <input type="hidden" name="atencao_detalhe" id="val-atencao_detalhe">
      <div class="erro-msg">Selecione um nível.</div>
    </div>

    <div class="pergunta-card" id="q-val-7">
      <div class="pergunta-label">Qual valor do Cartório Pantaneiro você mais sente que se identifica? Explique com um exemplo do seu dia a dia. <span class="obrig">*</span></div>
      <div class="pergunta-hint">Valores: Compromisso com a Justiça · Valorização · Respeito · Trabalho em Equipe · Acolhimento ao Cliente</div>
      <textarea name="valor_identificacao" placeholder="Escreva aqui..." rows="4"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-val-8">
      <div class="pergunta-label">Onde você se imagina profissionalmente daqui a 2 anos dentro do Cartório Pantaneiro? <span class="obrig">*</span></div>
      <textarea name="projecao" placeholder="Escreva aqui..." rows="3"></textarea>
      <div class="erro-msg">Campo obrigatório.</div>
    </div>

    <div class="pergunta-card" id="q-val-9">
      <div class="pergunta-label">Há algo sobre você, sua trajetória ou sua motivação que considera relevante e que ainda não foi contemplado neste formulário?</div>
      <div class="pergunta-hint">Campo opcional.</div>
      <textarea name="complemento" placeholder="Escreva aqui se desejar..." rows="3"></textarea>
    </div>

    <!-- ACEITE LGPD -->
    <label class="lgpd-check-wrap" id="lgpd-wrap">
      <input type="checkbox" id="aceite-lgpd" name="aceite_lgpd">
      <span class="lgpd-check-label">🔒 <strong>Li e concordo</strong> com o tratamento dos meus dados pessoais para fins de participação neste processo seletivo, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Estou ciente de que posso solicitar a exclusão dos meus dados pelo e-mail <strong>contato@genthe.com.br</strong>.</span>
    </label>
    <div class="lgpd-erro-msg" id="lgpd-erro">Você precisa aceitar os termos de proteção de dados para enviar a candidatura.</div>

    <!-- SUBMIT -->
    <div class="submit-area">
      <button type="submit" class="btn-enviar" id="btnEnviar">Enviar candidatura</button>
      <p class="submit-nota">Ao enviar, você confirma que as informações prestadas são verdadeiras. O processo é conduzido pela <strong>Genthe Consultoria em Gestão de Pessoas</strong> com total sigilo e profissionalismo.</p>
    </div>

  </form>

  <!-- CONFIRMAÇÃO -->
  <div class="confirmacao" id="confirmacao">
    <div class="check-circle">
      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <h2 class="conf-titulo">Candidatura enviada!</h2>
    <p class="conf-desc">
      Recebemos sua inscrição para a vaga de <strong>Auxiliar de Escrevente – Notas</strong>.<br><br>
      A equipe da <strong>Genthe Consultoria</strong> realizará a análise de perfil e entrará em contato com você em até <strong>3 dias úteis</strong> com o resultado da etapa de habilitação.<br><br>
      Fique atento ao seu e-mail e WhatsApp cadastrados no RH.
    </p>
  </div>
</div>

<footer class="footer">
  <p>Elaborado por <strong>Genthe Consultoria em Gestão de Pessoas</strong> · Revisado por <strong>Dr. Rodrigo Paulucci Santos</strong> — Tabelião Titular</p>
  <p style="margin-top:4px;"><strong>contato@genthe.com.br</strong> · genthe.com.br · Cartório Pantaneiro · Campo Grande – MS · 2026</p>
</footer>

<script>
  // Likert buttons
  document.querySelectorAll('.likert-wrap').forEach(wrap => {
    wrap.querySelectorAll('.likert-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        wrap.querySelectorAll('.likert-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        const name = wrap.dataset.name;
        document.getElementById('val-' + name).value = btn.dataset.val;
        wrap.closest('.pergunta-card').classList.remove('erro');
      });
    });
  });

  // Highlight opcao selecionada
  document.querySelectorAll('.opcao input').forEach(inp => {
    inp.addEventListener('change', () => {
      if (inp.type === 'radio') {
        const grupo = inp.name;
        document.querySelectorAll(`input[name="${grupo}"]`).forEach(r => {
          r.closest('.opcao').classList.remove('selecionada');
        });
      }
      if (inp.checked) {
        inp.closest('.opcao').classList.add('selecionada');
      } else {
        inp.closest('.opcao').classList.remove('selecionada');
      }
      inp.closest('.pergunta-card').classList.remove('erro');
    });
  });

  // Limpar erro LGPD ao marcar
  document.getElementById('aceite-lgpd').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('lgpd-wrap').classList.remove('erro-lgpd');
      document.getElementById('lgpd-erro').style.display = 'none';
    }
  });

  // Progress bar
  function atualizarProgress() {
    const campos = document.querySelectorAll('input[required], textarea[required], input[type="hidden"]');
    const form = document.getElementById('formPSI');
    const total = form.querySelectorAll('.pergunta-card').length;
    let preenchidos = 0;
    document.querySelectorAll('.pergunta-card').forEach(card => {
      const radios = card.querySelectorAll('input[type="radio"]:checked');
      const checks = card.querySelectorAll('input[type="checkbox"]:checked');
      const texts = card.querySelectorAll('input[type="text"], textarea');
      const hidden = card.querySelectorAll('input[type="hidden"]');
      let ok = false;
      if (radios.length > 0) ok = true;
      if (checks.length > 0) ok = true;
      texts.forEach(t => { if (t.value.trim()) ok = true; });
      hidden.forEach(h => { if (h.value) ok = true; });
      if (ok) preenchidos++;
    });
    const pct = Math.round((preenchidos / total) * 100);
    document.getElementById('progress').style.width = pct + '%';
  }
  document.getElementById('formPSI').addEventListener('input', atualizarProgress);
  document.getElementById('formPSI').addEventListener('change', atualizarProgress);

  // Validação e envio
  document.getElementById('formPSI').addEventListener('submit', async function(e) {
    e.preventDefault();
    let valido = true;

    // Limpar erros
    document.querySelectorAll('.pergunta-card').forEach(c => c.classList.remove('erro'));

    // Campos de texto obrigatórios
    const textObrig = [
      { id: 'q-nome', name: 'nome' },
      { id: 'q-cargo-atual', name: 'cargo_atual' },
      { id: 'q-motivo', name: 'motivo' },
      { id: 'q-erro', name: 'erro' },
      { id: 'q-dev', name: 'desenvolvimento' },
      { id: 'q-val-1', name: 'val_respeito' },
      { id: 'q-val-3', name: 'trabalho_equipe' },
      { id: 'q-val-7', name: 'valor_identificacao' },
      { id: 'q-val-8', name: 'projecao' },
    ];
    textObrig.forEach(({ id, name }) => {
      const el = document.querySelector(`[name="${name}"]`);
      if (!el || !el.value.trim()) {
        document.getElementById(id).classList.add('erro');
        valido = false;
      }
    });

    // Radios obrigatórios
    const radioObrig = [
      { id: 'q-setor-atual', name: 'setor_atual' },
      { id: 'q-tempo', name: 'tempo_casa' },
      { id: 'q-formacao', name: 'formacao' },
      { id: 'q-exp-documental', name: 'exp_documental' },
      { id: 'q-prazos', name: 'prazos' },
      { id: 'q-certidoes', name: 'certidoes' },
      { id: 'q-val-4', name: 'alta_demanda' },
      { id: 'q-val-5', name: 'feedback' },
    ];
    radioObrig.forEach(({ id, name }) => {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      if (!checked) {
        document.getElementById(id).classList.add('erro');
        valido = false;
      }
    });

    // Checkboxes
    const atosChecked = document.querySelectorAll('input[name="atos"]:checked');
    if (atosChecked.length === 0) {
      document.getElementById('q-atos').classList.add('erro');
      valido = false;
    }

    // Likerts
    const likerts = [
      { cardId: 'q-informatica', hiddenId: 'val-informatica' },
      { cardId: 'q-val-2', hiddenId: 'val-comprometimento' },
      { cardId: 'q-val-6', hiddenId: 'val-atencao_detalhe' },
    ];
    likerts.forEach(({ cardId, hiddenId }) => {
      const val = document.getElementById(hiddenId).value;
      if (!val) {
        document.getElementById(cardId).classList.add('erro');
        valido = false;
      }
    });

    // LGPD
    const lgpdWrap = document.getElementById('lgpd-wrap');
    const lgpdErro = document.getElementById('lgpd-erro');
    if (!document.getElementById('aceite-lgpd').checked) {
      lgpdWrap.classList.add('erro-lgpd');
      lgpdErro.style.display = 'block';
      valido = false;
    } else {
      lgpdWrap.classList.remove('erro-lgpd');
      lgpdErro.style.display = 'none';
    }

    if (!valido) {
      const primeiroErro = document.querySelector('.pergunta-card.erro');
      if (primeiroErro) primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Sucesso — coletar dados e enviar ao Supabase
    const fd = new FormData(document.getElementById('formPSI'));
    const respostas = {};
    fd.forEach((val, key) => {
      if (respostas[key]) {
        respostas[key] = Array.isArray(respostas[key])
          ? [...respostas[key], val] : [respostas[key], val];
      } else {
        respostas[key] = val;
      }
    });

    // Montar linha plana para o Supabase
    const payload = {
      vaga:         'Auxiliar de Escrevente – Notas',
      nome:         respostas.nome || null,
      cargo_atual:  respostas.cargo_atual || null,
      setor_atual:  respostas.setor_atual || null,
      tempo_casa:   respostas.tempo_casa || null,
      motivo:       respostas.motivo || null,
      formacao:     respostas.formacao || null,
      curso:        respostas.curso || null,
      exp_documental:   respostas.exp_documental || null,
      exp_detalhe:      respostas.exp_detalhe || null,
      atos_conhecidos:  Array.isArray(respostas.atos) ? respostas.atos.join(', ') : (respostas.atos || null),
      informatica:      respostas.informatica || null,
      prazos:           respostas.prazos || null,
      situacao_erro:    respostas.erro || null,
      certidoes:        respostas.certidoes || null,
      desenvolvimento:  respostas.desenvolvimento || null,
      val_respeito:         respostas.val_respeito || null,
      comprometimento:      respostas.comprometimento || null,
      trabalho_equipe:      respostas.trabalho_equipe || null,
      alta_demanda:         respostas.alta_demanda || null,
      feedback:             respostas.feedback || null,
      atencao_detalhe:      respostas.atencao_detalhe || null,
      valor_identificacao:  respostas.valor_identificacao || null,
      projecao:             respostas.projecao || null,
      complemento:          respostas.complemento || null,
      aceite_lgpd:          respostas.aceite_lgpd === 'on',
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/psi_respostas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error('Supabase error:', err);
      }
    } catch(e) {
      console.error('Erro ao enviar:', e);
    }

    document.getElementById('progress').style.width = '100%';
    document.getElementById('progress').style.background = 'var(--verde)';
    document.getElementById('formPSI').style.display = 'none';
    document.getElementById('confirmacao').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
</body>
</html>
