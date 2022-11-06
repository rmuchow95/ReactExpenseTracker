import "./App.css";
import Create from "./components/Create";

function App() {
  const title = "React Expense Tracker";

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <h1>{title}</h1>
        {/* <Main /> */}
        <Create />
      </div>
    </div>
  );
}

export default App;
