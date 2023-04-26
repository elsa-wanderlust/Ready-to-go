import { useState } from "react";
import "./App.css";
import ButtonsSet from "./components/ButtonsSet";
import logo from "./img/logo.svg";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const student = "Elsa";

  return (
    <div className="display">
      <header>
        <img src={logo} alt="purple shuttle heading to Pluto" />
        <h1>Ready To Go</h1>
      </header>
      <main>
        <section>
          <ButtonsSet switch={switch1} setSwitch={setSwitch1} />
          <ButtonsSet switch={switch2} setSwitch={setSwitch2} />
          <ButtonsSet switch={switch3} setSwitch={setSwitch3} />
        </section>
        <p
          className={
            switch1 && switch2 && switch3 ? "result green" : "result red"
          }
        >
          {switch1 && switch2 && switch3 ? "Go !" : "No way !"}
        </p>
      </main>
      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by&nbsp;
        <span>{student}</span>
      </footer>
    </div>
  );
}

export default App;
