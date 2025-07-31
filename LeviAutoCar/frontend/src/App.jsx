import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [veiculos, setVeiculos] = useState([]);
  const [form, setForm] = useState({ marca: '', modelo: '', ano: '', preco: '', cor: '', km: '', combustivel: '', imagem: '' });

  useEffect(() => {
    axios.get('http://localhost:4000/api/veiculos').then(res => setVeiculos(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/veiculos', form);
    const res = await axios.get('http://localhost:4000/api/veiculos');
    setVeiculos(res.data);
    setForm({ marca: '', modelo: '', ano: '', preco: '', cor: '', km: '', combustivel: '', imagem: '' });
  };

  return (
    <div className="container mx-auto p-4 text-white bg-[#0E1B34] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Levi Auto Car</h1>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-8">
        {['marca', 'modelo', 'ano', 'preco', 'cor', 'km', 'combustivel', 'imagem'].map((field) => (
          <input key={field} name={field} value={form[field]} onChange={handleChange} placeholder={field} className="p-2 rounded text-black" />
        ))}
        <button className="bg-red-700 text-white px-4 py-2 rounded">Adicionar Veículo</button>
      </form>

      <div className="grid md:grid-cols-3 gap-4">
        {veiculos.map((v, i) => (
          <div key={i} className="bg-white text-black p-4 rounded shadow">
            <img src={v.imagem} alt={v.modelo} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{v.marca} {v.modelo}</h2>
            <p>Ano: {v.ano}</p>
            <p>KM: {v.km} km</p>
            <p>Combustível: {v.combustivel}</p>
            <p>Cor: {v.cor}</p>
            <p className="font-bold text-red-700">R$ {v.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;