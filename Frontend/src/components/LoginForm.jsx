import { useState} from "react";
import axios from "axios";

export default  function LoginForm({onLogin}) {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const submit = async (e) => {
       e.preventDefault();
       try {
        const response = await axios.post("https://ai-book-suggestions.onrender.com/api/auth/login", {email, password});
        localStorage.setItem("token", response.data.access_token);
         onLogin();
     } catch {
        alert ("Login failed");
    }
};
    return (
        <form onSubmit ={submit} >
            <input type="email" value={email} onChange = {e => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit"> Login</button>
        </form>
    );
} 
