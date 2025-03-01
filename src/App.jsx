import "./styles/App.css";
import Header from "./components/Header";
import DashBoard from "./page/DashBoard";

function App() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <DashBoard />
      </div>
    </>
  );
}

export default App;
