import "./Container.css";

function Conteiner(props: { children: JSX.Element | JSX.Element[] }) {
  return <div className="AppContainer">
    {props.children}
  </div>;
};

export default Conteiner;
