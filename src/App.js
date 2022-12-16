import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
};

export default App;