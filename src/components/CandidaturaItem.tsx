import React from "react";

interface ICandidatura {
  id: number,
  tituloVaga: string,
  empresa: string,
  statusCandidatura: string
}

interface CandidaturaProps {
  candidatura: ICandidatura,
  onDelete: (id: number) => void,
}

const getStatusColor = (status: string) => {
  const colors: { [key: string]: string } = {
    'PENDENTE': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'TRIAGEM': 'bg-blue-100 text-blue-800 border-blue-300',
    'TESTE': 'bg-purple-100 text-purple-800 border-purple-300',
    'ENTREVISTA': 'bg-indigo-100 text-indigo-800 border-indigo-300',
    'AGUARDANDO_RETORNO': 'bg-orange-100 text-orange-800 border-orange-300',
    'OFERTA': 'bg-green-100 text-green-800 border-green-300',
    'RECUSADA': 'bg-red-100 text-red-800 border-red-300',
    'CONTRATADO': 'bg-emerald-100 text-emerald-800 border-emerald-300'
  };
  return colors[status] || 'bg-gray-100 text-gray-800 border-gray-300';
};

const formatStatusLabel = (status: string) => {
  return status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
};

const CandidaturaItem: React.FC<CandidaturaProps> = ({ candidatura, onDelete }) => {
  return (
    <li className="group animate-fade-in">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 hover:border-indigo-300">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {candidatura.tituloVaga}
            </h3>
            <p className="text-gray-600 mb-3 truncate">
              {candidatura.empresa}
            </p>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(candidatura.statusCandidatura)}`}>
              {formatStatusLabel(candidatura.statusCandidatura)}
            </span>
          </div>
          <button
            onClick={() => onDelete(candidatura.id)}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:scale-110 transition-all duration-200 group/btn"
          >
            <svg className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  )
}

export default CandidaturaItem;