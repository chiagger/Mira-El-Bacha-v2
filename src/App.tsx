import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainContent />
      </div>
    </>
  );
}

export default App;
