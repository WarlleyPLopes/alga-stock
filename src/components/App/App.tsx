import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Input from "../../shared/Input";
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
  const [street, setStreet] = useState('')

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
        <Input
          label="Street"
          placeholder="E.g.: 15h Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
