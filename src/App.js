import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import ClassComponent from "./components/ClassComponent";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./components/Create";

function App() {
  const title = "React Expense Tracker";

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <h1>{title}</h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
