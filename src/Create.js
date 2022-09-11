import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    

    return (  
    <div className="create">
     
     <h2> Add a new blog </h2>
     <form>
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
        <button> Aggiungi Blog </button>
        <p> { title } </p>
        <p> { body } </p>
        <p> { author } </p>


     </form>
     

    </div>
       

    );
}
 
export default Create;