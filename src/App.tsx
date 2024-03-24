import "./App.css";
import User from "./components/User";
import PropsTricks from "./components/PropsTricks";
import State from "./components/State";
import ChildrenProps from "./components/ChildrenProps";

function App() {
  return (
    <>
      <User name="Esra" />
      <PropsTricks name="Esra Nur" />
      <State/>
      <ChildrenProps >
      <h2>Children Element</h2>
      </ChildrenProps>
    </>
  );
}

export default App;
