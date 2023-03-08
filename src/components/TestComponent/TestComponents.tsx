import { useEffect, useState } from "react";
import "./TestComponents.css";

function TestComponents(props: { name?: string }) {
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("Componet was create");
  }, []);

  useEffect(() => {
    console.log("Age has been update to: " + age);
  }, [age]);

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
