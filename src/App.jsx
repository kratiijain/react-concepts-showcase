import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Counter from "./components/Counter";
import UserGreeting from "./components/UserGreeting";
import InputFocus from "./components/InputFocus";
import ThemeButton from "./components/ThemeButton";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px" }}>
        <h1>React Learning Examples</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <hr />
        <Counter />
        <hr />
        <UserGreeting userName="Kratika" />
        <hr />
        <InputFocus />
        <hr />
        <ThemeButton />
        <hr />
        <ExpensiveComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
