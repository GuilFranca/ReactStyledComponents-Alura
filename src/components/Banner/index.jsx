import styled from "styled-components";

const BannerEstilizado = styled.figure`
    position: relative;
    border-radius: 20px;
    width: 100%;
    margin: 0;

    img {
        width: 100%;
        height: 328px;
        border-radius: 20px;
    }
    
    h1 {
        font-weight: 400;
        position: absolute;
        width: 301px;
        top: 92px;
        left: 64px;
        color: #FFF;
        font-size: 40px;
        margin: 0;
    }
`


const Banner = ({ text, backgroundBanner }) => {
    return (
        <BannerEstilizado>
            <img src={backgroundBanner} alt="banner" />
            <h1>{text}</h1>
        </BannerEstilizado>
    );
}

export default Banner;