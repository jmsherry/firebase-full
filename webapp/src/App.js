// import logo from './logo.svg';
import './App.css';
import {Todos} from "./Todos";
import {AuthButton, useUser} from "./AuthButton";
import ServerTime from './ServerTime';

function App() {
  const user = useUser();
  return (
    <div className="App">
      <AuthButton/>
        {user && <Todos userId={user.uid}/>}
      <ServerTime />
    </div>
  );
}

export default App;
