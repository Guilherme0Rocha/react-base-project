import { useParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Protegida from "./Protegida";
import Base from "./Base";
import { useState } from "react";

const Fotos = () => {
  const [dadosFiltrados, setDados] = useState(dados);
  
  const filtra = (entrada) => {
  setDados(dados.filter(
    (ele) => ele.nome.includes(entrada) || ele.link_original.includes(entrada)
  ))
}

  return (
    <Base>
      <input 
        type="text" 
        placeholder="filtro" 
        onChange={ (e) => filtra(e.target.value)}
      />
    <ListContainer>
    {dadosFiltrados.map(
      (el, index) => (
        <FotoCard 
          key={index}
          titulo={el.nome}
          src={`${process.env.PUBLIC_URL}${el.url}`}
          link_original={el.link_original}
          agradecimento={el.agradecimento}
        />
        )
    )}
    </ListContainer>   
    </Base>
 )
};

export default Fotos;