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
    <div>
      <h1>JobTrack System</h1>

      <form onSubmit={handleAdicionarCandidatura}>
        <input
          type="text"
          placeholder="Título da vaga"
          value={tituloVaga}
          onChange={(evento) => setTituloVaga(evento.target.value)}
        />
        <input
          type="text"
          placeholder="Nome da empresa"
          value={empresa}
          onChange={(evento) => setEmpresa(evento.target.value)}
        />
        <Select
          value={statusCandidatura}
          onChange={handleStatusChange}
          options={statusOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Selecione o status"
        />
        <button type="submit">
          Adicionar
        </button>
      </form>

      <ul>
        {candidaturas.map(candidatura => (
          <CandidaturaItem 
            key={candidatura.id}
            candidatura={candidatura}
            onDelete={handleDeletarCandidatura}
          />
        ))}
      </ul>
    </div>
  )
}

export default App