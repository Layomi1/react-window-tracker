import { useState } from "react";
import WindowTracker from "./WindowTracker";

function App() {
  const [show, setShow] = useState(true);

  return (
    <main>
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle Window Tracker
      </button>
      {show && <WindowTracker />}
    </main>
  );
}

export default App;
