import { Link } from "react-router-dom";

const Notfound = () => {
    return (  
    <div className="not-found">
        <h2> Oppps!</h2>
        <p> Pare tu ti sia perso !</p>
        <Link to = "/"> Torna alla home! ...</Link>
    </div>
    );
}
 
export default Notfound;