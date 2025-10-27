import { useState, useEffect } from "react"
import Select from 'react-select'
import CandidaturaItem from "./components/CandidaturaItem";

interface IOption {
  value: string;
  label: string;
}

interface ICandidatura {
  id: number,
  tituloVaga: string,
  empresa: string,
  statusCandidatura: string
}

function App() {
  const [candidaturas, setCandidatura] = useState<ICandidatura[]>([]);
  const [tituloVaga, setTituloVaga] = useState<string>('');
  const [empresa, setEmpresa] = useState<string>('');
  const [statusCandidatura, setStatusCandidatura] = useState<IOption>({ value: 'PENDENTE', label: 'Pendente' });

  const statusOptions: IOption[] = [
    { value: 'PENDENTE', label: 'Pendente' },
    { value: 'TRIAGEM', label: 'Triagem' },
    { value: 'TESTE', label: 'Teste' },
    { value: 'ENTREVISTA', label: 'Entrevista' },
    { value: 'AGUARDANDO_RETORNO', label: 'Aguardando Retorno' },
    { value: 'OFERTA', label: 'Oferta' },
    { value: 'RECUSADA', label: 'Recusada' },
    { value: 'CONTRATADO', label: 'Contratado' }
  ];

  const handleStatusChange = (newValue: IOption | null) => {
    if (newValue) {
      setStatusCandidatura(newValue);
    }
  };

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch('http://localhost:8080/api/candidaturas');
        const dados = await resposta.json();
        setCandidatura(dados);
      } catch (error) {
        console.error('Erro ao buscar candidaturas: ', error);
      }
    }
    buscarDados();
  }, []);

  const handleAdicionarCandidatura = async (evento: React.FormEvent) => {
    evento.preventDefault();

    if (!tituloVaga || !empresa || !statusCandidatura) {
      alert('Candidatura incompleta, faça novamente!');
      return;
    }

    try {
      const resposta = await fetch('http://localhost:8080/api/candidaturas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tituloVaga: tituloVaga, empresa: empresa, statusCandidatura: statusCandidatura.value }),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao criar candidatura');
      }

      const novaCandidaturaCriada: ICandidatura = await resposta.json();

      setCandidatura([...candidaturas, novaCandidaturaCriada]);
      setTituloVaga('');
      setEmpresa('');
      setStatusCandidatura({ value: 'PENDENTE', label: 'Pendente' });
    } catch (error) {
      console.error('Erro ao cadastrar candidatura: ', error);
    }
  }

  const handleDeletarCandidatura = async (id:number) => {
    try {
      const resposta = await fetch(`http://localhost:8080/api/candidaturas/${id}`, {
        method: 'DELETE',
      });

      if(!resposta.ok && resposta.status !== 204){
        throw new Error('Erro ao deletar tarefa');
      }

      setCandidatura(candidaturas.filter(candidatura => candidatura.id !== id));
    } catch(error){
      console.error('Erro ao deletar candidatura: ', error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                JobTrack System
              </h1>
              <p className="text-sm text-gray-600 mt-1">Gerencie suas candidaturas de emprego</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded"></div>
            Nova Candidatura
          </h2>
          
          <form onSubmit={handleAdicionarCandidatura} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título da Vaga
              </label>
              <input
                type="text"
                placeholder="Ex: Desenvolvedor React"
                value={tituloVaga}
                onChange={(evento) => setTituloVaga(evento.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Empresa
              </label>
              <input
                type="text"
                placeholder="Ex: Tech Corp"
                value={empresa}
                onChange={(evento) => setEmpresa(evento.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status da Candidatura
              </label>
              <Select
                value={statusCandidatura}
                onChange={handleStatusChange}
                options={statusOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Selecione o status"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Adicionar Candidatura
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded"></div>
            Minhas Candidaturas
            <span className="ml-3 px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
              {candidaturas.length}
            </span>
          </h2>

          {candidaturas.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma candidatura ainda</h3>
              <p className="text-gray-600">Adicione sua primeira candidatura usando o formulário acima</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {candidaturas.map(candidatura => (
                <CandidaturaItem 
                  key={candidatura.id}
                  candidatura={candidatura}
                  onDelete={handleDeletarCandidatura}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App