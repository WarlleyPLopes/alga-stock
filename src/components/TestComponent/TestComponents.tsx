import { useState } from "react";
import "./TestComponents.css";

function TestComponents(props: { name?: string }) {
  const [age, setAge] = useState(21);

  return (
    <div className="TestComponent">
      Olá, {props.name},{age}
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +
      </button>
      ;
    </div>
  );
}

export default TestComponents;
