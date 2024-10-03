import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";

const Home = () => {  

  return (
    <Base>
      <h1>
     Aplicação de Exemplo
      </h1>
    </Base>
  )
}

export default Home