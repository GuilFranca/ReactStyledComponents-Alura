import styled from "styled-components";
import tags from "./tags.json";

const ContainerTags = styled.section`
    display: flex;
    gap: 17px;
    align-items: center;
    margin: 56px 0 39px;

    p {
        font-size: 24px;
        color: #D9D9D9;
        width: 219px;
        margin: 0;
    }

    button {
        background-color: #44566e;
        border: 2px solid #44566e;
        border-radius: 10px;
        color: #FFF;
        font-size: 24px;
        padding: 10px 8px;
        cursor: pointer;
        &:hover {
            border-color: #C98CF1;
        }
    }
`;

const Tags = () => {
    return (
        <ContainerTags>
            <p>Busque por tags:</p>
            {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
        </ContainerTags>
    );
}

export default Tags;