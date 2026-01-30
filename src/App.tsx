import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  var x = 10;
  return (
    <>
      <h1>Learning App</h1>
      <h4>{apiUrl}</h4>
      <h3>{x}</h3>
    </>
  );
}

export default App;
