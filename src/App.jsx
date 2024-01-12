import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Provider from "./Context/Usercontext";
function App() {
  return (
    <Provider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </Provider>
  );
}

export default App;
