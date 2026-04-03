import Navigation from "./Navigation.js";
import Forms from "./Forms.js";


function Header({handleSubmit}){

    return(
        <header>
            <h1>Header - Vídeos</h1>
            <Forms handleSubmit={handleSubmit}/>
            <Navigation/>
        </header>
        
    );
}

export default Header;