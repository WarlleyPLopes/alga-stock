import "./Container.css";

const Conteiner: React.FC<{ children: JSX.Element | JSX.Element[] }> = (props) => {
  return <div className="AppContainer">
    {props.children}
  </div>;
};

export default Conteiner;
