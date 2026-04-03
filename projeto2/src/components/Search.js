import Container from './Container.js';

function Search({searchTerm}){

    return(

        <div>
            <h2 style={{ textTransform: 'capitalize' }}>Resultados para: {searchTerm}</h2>
            <Container searchTerm={searchTerm} />
        </div>
    );
}

export default Search;