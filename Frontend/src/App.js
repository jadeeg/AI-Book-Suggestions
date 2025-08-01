import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm.jsx";
import  SearchPage from "./pages/SearchPage.jsx";
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
      <Home />
      
      <LoginForm />
 
    </div>
  );

}

export default App;
