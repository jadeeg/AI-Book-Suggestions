
import './App.css';
import LoginForm from "./components/LoginForm.jsx";
import i18n from "./i18n.js";
import  "./App.css";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        Book recommendations
        <p>Powered by AI</p>
      </h1>
      <h2>
        
        <LoginForm />
      </h2>

      <Home />
    </div>
  );

}

export default App;
