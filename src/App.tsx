import "./App.css";

function App() {
  let apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      <h1>Vite + React Learning App</h1>
      <h4>{apiUrl}</h4>
    </>
  );
}

export default App;
