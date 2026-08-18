import styled from "styled-components";
import Imagem from "../Galeria/Imagem"
import { useEffect } from "react";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DigalogEstilizado = styled.dialog`
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    width: 50%;
`;

const CloseBtn = styled.img`
    position: absolute;
    top: 24px;
    right: 24px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const ModalZoom = ({ foto, aoFecharModal }) => {
    useEffect(() => {
        if (foto) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [foto])
    
    return (
        <>
            {foto &&
                <Overlay>
                    <DigalogEstilizado open={!!foto}>
                        <Imagem
                            foto={foto}
                            expandida={true}
                        />
                        <CloseBtn src="./icones/fechar.png" alt="Botão de fechar" onClick={() => aoFecharModal()} />
                    </DigalogEstilizado>
                </Overlay>
            }
        </>
    )
}

export default ModalZoom