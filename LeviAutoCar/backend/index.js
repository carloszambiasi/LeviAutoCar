const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/api/veiculos', async (req, res) => {
  const { data, error } = await supabase.from('veiculos').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.post('/api/veiculos', async (req, res) => {
  const { marca, modelo, ano, preco, cor, km, combustivel, imagem } = req.body;
  const { data, error } = await supabase.from('veiculos').insert([{ marca, modelo, ano, preco, cor, km, combustivel, imagem }]);
  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

app.listen(4000, () => console.log('Servidor backend rodando na porta 4000'));