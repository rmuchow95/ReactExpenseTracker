import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import ClassComponent from "./components/ClassComponent";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "React Expense Tracker";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <Main /> <ClassComponent /> <Home />
      </div>
    </div>
  );
}

export default App;
