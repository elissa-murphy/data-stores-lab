import "./App.css";
import FakeKanBan from "./components/FakeKanBan";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <FakeKanBan />
      </DndProvider>
    </div>
  );
}

export default App;
