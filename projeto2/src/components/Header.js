import Navigation from "./Navigation.js";
import Forms from "./Forms.js";


function Header({handleSubmit}){

    return(
        <header>
            <h1>Projeto 2 - Front End II - Filmes</h1>
            <Forms handleSubmit={handleSubmit}/>
            <Navigation/>
        </header>
        
    );
}

export default Header;