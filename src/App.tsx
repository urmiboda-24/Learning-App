import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      <h1>Learning App</h1>
      <h4>{apiUrl}</h4>
    </>
  );
}

export default App;
