
const button = document.getElementById("submit");

function booksRec(event){
    event.preventDefault();

let context =
  "  You're an assistant with reliable sources that recommends book lists. Based on the user's prompt, suggest 3 books in the prompt's language (Portuguese or English).Include the title, author, and genre. Keep simple, polite, and avoid cliches and symbols";
const key = "40294d271t694ab0b8549a4358o9f5f1";
const prompt = document.getElementById("input").value;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
let h2 = document.querySelector("h2");
    axios.get(apiUrl)
    .then(response => {
        h2.innerHTML = `${response.data.answer}`;
        console.log(response.data.answer);
    })
    .catch(errors=> {
        console.error(errors); 
    })
}
 button.addEventListener("click",booksRec);



