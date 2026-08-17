import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import backgroundBanner from "./assets/banner.png"
import Galeria from "./components/Galeria";
import fotos from "./fotos.json"
import { useState } from "react";

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  main {
    display: flex;
    gap: 24px;
  }
`;

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos);

  return (
    <FundoGradient>
      <EstilosGlobais />
      <MainContainer>
        <Cabecalho />
        <main>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              text={"A galeria mais completa de fotos do espaço!"}
              backgroundBanner={backgroundBanner}
            />
            <Galeria fotos={fotosGaleria}/>
          </ConteudoGaleria>
        </main>
      </MainContainer>
    </FundoGradient>
  )
}

export default App;
