import './App.css';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBInd from './components/EventBInd';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import LineIn from './components/LineIn';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
// import PortalDemo from './components/PortalDemo';


function App() {
  return (
    <div className="App">

      <ErrorBoundry>  <Hero heroname='Batman' /> </ErrorBoundry>
      <ErrorBoundry>   <Hero heroname='Superman' /> </ErrorBoundry>
      <ErrorBoundry> <Hero heroname='joker' /> </ErrorBoundry>

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <LineIn /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <List /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBInd /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Doremon"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi excepturi tenetur ipsam voluptas amet.</p> </Greet>
      <Greet name="clark" heroname="Superman"><button>Button
      </button></Greet> */}
      {/* <Greet name="Dayana" heroname="Wonderwomen" /> */}

      {/* <Welcome name="Bruce" heroname="Doremon" /> */}
      {/* <Welcome name="clark" heroname="Superman" /> */}
      {/* <Welcome name="Dayana" heroname="Wonderwomen" /> */}

      {/* <Hello />  */}
    </div>
  );
}

export default App;
