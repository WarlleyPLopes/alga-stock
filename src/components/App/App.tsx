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
        <ul>
          {
            ['Warlley', 'Daniel', 'Marcos', 'Daniel'].map((name,idx) => {
              return <li key={idx}>
                { name }
              </li>
            })
          }
        </ul>
      </Container>
    </div>
  );
}

export default App;
