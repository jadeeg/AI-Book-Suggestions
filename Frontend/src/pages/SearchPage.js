import {useState} from "react";
import axios from "axios";

export default function SeachPage() {
    const [query, setQuery] = useState("");
    const [results,setResults] = useState([]);

    const search = async () => {
        const response = await axios.get(http://localhost:500/api)
    }

    
}