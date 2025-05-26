#!/bin/bash

echo "🚀 Designer AI Guide - GitHub Pages Setup"
echo "========================================="

# Verificar se estamos em um repositório git
if [ ! -d ".git" ]; then
    echo "❌ Este não é um repositório Git. Inicialize com: git init"
    exit 1
fi

# Verificar se tem origin configurado
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Origin remoto não configurado. Configure com:"
    echo "   git remote add origin https://github.com/SEU_USUARIO/designeraiguide.git"
    exit 1
fi

echo "✅ Repositório Git configurado"

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Build do projeto
echo "🔨 Fazendo build do projeto..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
    echo "❌ Falha no build. Verifique os erros acima."
    exit 1
fi

echo "✅ Build concluído com sucesso!"

# Verificar se o workflow existe
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Workflow do GitHub Actions não encontrado!"
    exit 1
fi

echo "✅ Workflow do GitHub Actions configurado"

echo ""
echo "🎉 Tudo pronto para o GitHub Pages!"
echo ""
echo "Próximos passos:"
echo "1. Fazer push das mudanças: git push origin main"
echo "2. Ir para Settings > Pages no GitHub"
echo "3. Selecionar 'GitHub Actions' como source"
echo "4. Aguardar o deploy automático"
echo ""
echo "Seu site estará disponível em:"
echo "https://SEU_USUARIO.github.io/designeraiguide"
echo ""
