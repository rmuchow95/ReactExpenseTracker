function Main(props) {
  const handleClick = () => {
    console.log("Hello, ninjas");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Expense</th>
            <th scope="col">Cost</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Groceries</td>
            <td>$100</td>
            <td>Harvest Market</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cat Food</td>
            <td>$50</td>
            <td>PSP</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Coffee</td>
            <td>$10</td>
            <td>Grab a Java</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Main;
