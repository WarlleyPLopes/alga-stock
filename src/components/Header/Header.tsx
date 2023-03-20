import "./Header.css";

declare interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
