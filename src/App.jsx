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

  section {
    display: flex;
    justify-content: space-between;
  }
`;

function App() {
  return (
    <FundoGradient>
      <EstilosGlobais />
      <Cabecalho />
      <section>
        <BarraLateral />
        
        <Banner 
          text={"A galeria mais completa de fotos do espaço!"}
          backgroundBanner={backgroundBanner}
        />
      </section>
    </FundoGradient>
  )
}

export default App
