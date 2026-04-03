import Container from './Container.js';

function Item({searchTerm}){

    return(

        <div>
            <h2>{searchTerm} Movies</h2>
            <Container searchTerm={searchTerm}/>
            
        </div>
    );
}

export default Item;