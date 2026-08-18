import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
    /* width: 100%; */
`;

const ContainerFotos = styled.div`
    /* display: flex;
    flex-direction: column;
    gap: 24px; */
    /* flex-direction: row;
    flex-wrap: wrap; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ContainerFotos>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ContainerFotos>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;