import styled from "styled-components";
import Titulo from "../../Titulo";

import fotosPopulares from "./fotos-populares.json"

const ContainerPopulares = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerFotosPopulares = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    img {
        width: 212px;
        height: 158px;
        border-radius: 20px;
    }

    button {
        font-size: 20px;
        width: 208px;
        height: 56px;
        border-radius: 10px;
        border: 2px solid #7B78E5;
        color: #FFF;
        background-color: transparent;
        cursor: pointer;
    }
`;

const Populares = () => {
    return (
        <ContainerPopulares>
            <Titulo $alinhamento={"center"}>Populares</Titulo>
            <ContainerFotosPopulares>
                {fotosPopulares.map(fotoPopular => (
                    <img key={fotoPopular.id} src={fotoPopular.path} alt={fotoPopular.alt} />
                ))}
                <button>Ver mais</button>
            </ContainerFotosPopulares>
        </ContainerPopulares>
    );
}

export default Populares;