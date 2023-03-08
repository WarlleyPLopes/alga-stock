import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Header from "../Header";
import "./App.css";

function TesteComponent() {
  return (
    <img
      width="16px"
      src="https://cdn-icons-png.flaticon.com/512/70/70866.png"
      alt="img"
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Button
          onClick={() => window.alert("você clicou!")}
          appendIcon={<TesteComponent />}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
