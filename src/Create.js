import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
       e.preventDefault();
       const blog = {title, body, author};

       setIsPending(true);
       
       //POST method to call to Json File
       
       fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body : JSON.stringify(blog)
       }).then(() =>{
        console.log("nuovo blog aggiunto");
        setIsPending(false);
        history.push('/');
       });

       
    }
    

    return (  
    <div className="create">
    <h2> Aggiungi blog </h2>
     <form onSubmit={handleSubmit}>
        <label> Titolo : </label>
        <input
        type= "text" 
        required
        value = { title }
        onChange = { (e) => setTitle (e.target.value)}
        />
        <label> Sottotitolo </label>
        <textarea
        required
        value={body}
        onChange = {(e) => setBody (e.target.value)}
        ></textarea>
        <label> Autore: </label>
        <select 
        value={author}
        onChange = {(e) => setAuthor (e.target.value)}
        >
            <option value="mario"> Mario </option>
            <option value="yoshi"> Yoshi </option>
        </select>
        { !isPending && <button> Aggiungi Blog </button>}
        { isPending && <button disabled> Aggiungi Blog ...</button> }
        <p> { title } </p>
        <p> { body } </p>
        <p> { author } </p>


     </form>
     

    </div>
       

    );
}
 
export default Create;