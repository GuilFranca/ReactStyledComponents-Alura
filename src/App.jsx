import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import backgroundBanner from "./assets/banner.png"

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

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais />
      <MainContainer>
        <Cabecalho />
        <main>
          <BarraLateral />
          <Banner
            text={"A galeria mais completa de fotos do espaço!"}
            backgroundBanner={backgroundBanner}
          />
        </main>
      </MainContainer>
    </FundoGradient>
  )
}

export default App
