import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import NovoComponente from "../components/NovoComponente/NovoComponente";

const SobreNos = () => {

    return (
        <>
        <Base>
          <h1>
         Sobre Nós
          </h1>
          <br/>
        </Base>
        <NovoComponente/>
        </>
      )
};
  
export default SobreNos;