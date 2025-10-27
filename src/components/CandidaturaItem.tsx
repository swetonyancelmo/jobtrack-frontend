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

const CandidaturaItem: React.FC<CandidaturaProps> = ({ candidatura, onDelete }) => {
  return (
    <li>
      <span>{candidatura.tituloVaga} - {candidatura.empresa} - {candidatura.statusCandidatura}</span>
      <button onClick={() => onDelete(candidatura.id)}>Remover</button>
    </li>
  )
}

export default CandidaturaItem;