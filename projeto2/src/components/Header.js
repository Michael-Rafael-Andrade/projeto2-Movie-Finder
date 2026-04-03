import Navigation from "./Navigation.js";
import Form from "./Forms.js";


function Header({handleSubmit}){

    return(
        <header>
            <h1>Header - Vídeos</h1>
            <Form handleSubmit={handleSubmit}/>
            <Navigation/>
        </header>
        
    );
}

export default Header;