import Card from "./Card.jsx";
import yami from "./assets/yami.png";
import "./App.css";

function App() {
  return (
    <Card
      name="함서현"
      major="컴퓨터공학과"
      studentId="20231246"
      image={yami}
    >
    </Card>
  );
}

export default App;
