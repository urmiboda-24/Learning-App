import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const x = 10;
  return (
    <>
      <h1 data-testid="login-text">Learning App - text</h1>
      <h4>{apiUrl}</h4>
      <h3>{x}</h3>
    </>
  );
}

export default App;
