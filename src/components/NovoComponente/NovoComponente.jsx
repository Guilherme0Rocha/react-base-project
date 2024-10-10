import { Container, Texto, Titulo } from "./Style";

const NovoComponente = (props) => (
    <Container>
        <Titulo>{props.titulo}</Titulo>
        <Texto>{props.texto}</Texto>
    </Container>
);

export default NovoComponente;