import './App.css';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Doremon"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi excepturi tenetur ipsam voluptas amet.</p> </Greet>
      <Greet name="clark" heroname="Superman"><button>Button
      </button></Greet>
      <Greet name="Dayana" heroname="Wonderwomen" />

      <Welcome name="Bruce" heroname="Doremon" />
      <Welcome name="clark" heroname="Superman" />
      <Welcome name="Dayana" heroname="Wonderwomen" />

      <Hello /> */}
    </div>
  );
}

export default App;
