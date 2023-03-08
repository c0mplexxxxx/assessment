import { useState, useRef } from "react";
import "./App.scss";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  const database = [
    {
      email: "vinhdeptrai@gmail.com",
      password: "hehehe"
    },
    {
      email: "example@kyanon.digital",
      password: "password123"
    }
  ];
  const [isLoggedIn, setLogIn] = useState(false);
  return (
    <div className="App">
    {isLoggedIn ? <Profile/> : <Login db={database} setLogIn={setLogIn}/>}
    </div>
  );
}

export default App;
