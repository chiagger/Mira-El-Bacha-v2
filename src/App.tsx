import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SideMenu />
        <MainContent />
      </div>
    </>
  );
}

export default App;
