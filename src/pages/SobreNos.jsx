import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import NovoComponente from "../components/NovoComponente/NovoComponente";
import ListContainer from "../components/ListContainer/ListContainer";

const meusDados = [
    {
        titulo: "Um título",
        texto: "Um texto grande."
    },
    {
        titulo: "Outro título",
        texto: "Outro texto grande."
    }
]

const SobreNos = () => {

    return (
        <>
            <Base>
                <h1>
                Sobre Nós
                </h1>
                <br/>
            <ListContainer>
                {
                    meusDados.map((ele, i) => (
                        <NovoComponente
                            key={i}
                            titulo={ele.titulo}
                            texto={ele.texto}
                        />
                    ))
                }
            </ListContainer>
            </Base>
        </>
      )
};
  
export default SobreNos;