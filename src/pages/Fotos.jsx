import { useParams, useSearchParams } from "react-router-dom";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Protegida from "./Protegida";
import Base from "./Base";
import { useEffect, useState } from "react";

const Fotos = () => {
  const [dadosFiltrados, setDados] = useState(dados);
  const [dadosFiltro, setDadosFiltrados] = useState(dados);
  const [parametros, setParametros] = useSearchParams();
  
  const filtra = (entrada) => {
    setDados(dadosFiltro.filter(
      (ele) => ele.nome.includes(entrada) || ele.link_original.includes(entrada)
  ))
  }


  useEffect( () => {
    if (parametros.has('chave')){
      setDadosFiltrados(dados.filter(
        (ele) => ele.id == parametros.get('chave')
      ))
    } else {
setDadosFiltrados(dados)
    }
    setDados(dadosFiltro);
  }, [parametros])

  return (
    <Base>
      <input 
        type="text" 
        onChange={ (e) => filtra(e.target.value)}
      />
      <select onChange={ (e) => {parametros.set('chave', e.target.value); setParametros(parametros)}}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <select onChange={ (e) => {parametros.set('autor', e.target.value); setParametros(parametros)}}>
        <option value='João'>João</option>
        <option value='Pedro'>Pedro</option>
        <option value='André'>André</option>
        <option value='Carlos'>Carlos</option>
      </select>
    <ListContainer>
    {dadosFiltrados.map(
      (el, index) => (
        <FotoCard 
          key={index}
          titulo={el.nome}
          src={`${process.env.PUBLIC_URL}/${el.url}`}
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