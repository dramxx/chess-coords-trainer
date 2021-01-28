import InfoPanel from "./components/InfoPanel";
import ChessBoard from "./components/ChessBoard";
import "./App.css";

const App = () => {
  return (
    <div className="App flex">
      <ChessBoard />
      <InfoPanel className="flex" message={"H4"} />
    </div>
  );
};

export default App;
