import './search.css'
import { useState } from 'react'

function Search({ onSearch }) {
    const [search, setSearch] = useState('');


    //funcion de busqueda
    const searcher = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);

        onSearch(searchTerm);
    };

    return (
        <>


            {/*HTML DEL BUSCADOR*/}
            <div className="container1">

                <input value={search} onChange={searcher} type="text" placeholder='Buscar' />

                <div className="boton">

                    <i className="fa-solid fa-magnifying-glass"></i>

                </div>
            </div>


        </>


    )
}

export default Search

