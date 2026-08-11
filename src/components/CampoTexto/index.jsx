import styled from "styled-components";

const CampoTextoEstilizado = styled.div`
    position: relative;
    display: inline-block;

    input {
        padding: 18px 48px 18px 16px;
        border: 2px solid #7B78E5;
        border-radius: 10px;
        background: transparent;
        color: white;
        width: 602px;
        font-size: 20px;
        box-sizing: border-box;
        font-weight: 400;
        line-height: 20px;
    }

    input:focus {
        outline: 0;
    }

    input::placeholder {
        color: #D9D9D9;
    }

    img {
        position: absolute;
        width: 38px;
        height: 38px;
        top: 12px;
        right: 10px;
    }
`;

const CampoTexto = () => {
    return (
        <CampoTextoEstilizado >
            <input type="text" placeholder="O que você procura?" />
            <img src="/imagens/search.png" alt="ícone de pesquisa" />
        </CampoTextoEstilizado>
    );
}

export default CampoTexto;