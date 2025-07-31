# Levi Auto Car

Aplicação completa para exibir e cadastrar veículos de uma revenda automotiva, utilizando:

- React + Vite
- Node.js + Express
- Supabase (PostgreSQL)
- Tailwind CSS

## Como usar

1. Crie uma conta no [https://supabase.com](https://supabase.com) e configure a tabela `veiculos`.
2. Clone o projeto e configure o arquivo `.env` no backend com sua URL e chave da API do Supabase.
3. No terminal:

```bash
# Backend
cd backend
npm install
cp .env.example .env
node index.js

# Frontend
cd ../frontend
npm install
npm run dev
```