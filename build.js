const fs   = require('fs');
const path = require('path');

const SUPABASE_URL      = process.env.SUPABASE_URL      || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const ADMIN_PASSWORD    = process.env.ADMIN_PASSWORD    || '';

const srcDir  = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

['index.html', 'admin.html'].forEach(arquivo => {
  const srcPath  = path.join(srcDir,  arquivo);
  const destPath = path.join(distDir, arquivo);

  let conteudo = fs.readFileSync(srcPath, 'utf8');
  conteudo = conteudo
    .replace(/%%SUPABASE_URL%%/g,      SUPABASE_URL)
    .replace(/%%SUPABASE_ANON_KEY%%/g, SUPABASE_ANON_KEY)
    .replace(/%%ADMIN_PASSWORD%%/g,    ADMIN_PASSWORD);

  fs.writeFileSync(destPath, conteudo, 'utf8');
  console.log(`✓ src/${arquivo} → dist/${arquivo}`);
});

console.log('Build concluído.');
