import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="header">
        <h1>CV Builder</h1>
      </div>
      <div id="cv">
      </div>
      <div id="footer">
      </div>
    </>
  );
}

export default App;
