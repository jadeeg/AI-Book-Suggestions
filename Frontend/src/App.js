import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm.jsx";
import  SearchPage from "./pages/SearchPage.jsx";
import i18n from "./i18n.js";
function App() {
  return (
    <div className="App">
      <h1> Book recommendations </h1>
      <p>Powered by AI</p>

      <LoginForm />
      <SearchPage />
    </div>
  );

}

export default App;
