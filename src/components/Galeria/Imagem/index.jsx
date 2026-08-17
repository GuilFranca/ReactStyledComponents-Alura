import styled from "styled-components";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Imagem = ({ id, path, titulo, fonte }) => {
    return (
        <Figure id={id}>
            <img src={path} alt={titulo} />
            <figcaption>
                <h3>{titulo}</h3>
                <footer>
                    <p>{fonte}</p>
                    <button><img src="./icones/favorito.png" alt="botão de favorito" /></button>
                    <button><img src="./icones/expandir.png" alt="botão de expandir" /></button>
                </footer>
            </figcaption>
        </Figure>
    );
}

export default Imagem;