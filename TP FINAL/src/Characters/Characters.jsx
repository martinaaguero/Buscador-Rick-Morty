import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './characters.css'

function Characters() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
const [opciones, setOpciones] = useState([])

  // useEffect para traer a la API
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);
      //  console.log(data.results)
      setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos : ', error);
      });
  }, []);


   // funcion para los resultados de la busqueda
   const handleSearch = (searchTerm) => {
    const results = posts.filter((post) =>
      post.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };


  return (
    <>
      <Search onSearch={handleSearch} />

       {/* HTML DEL SELECT BY GENDER */}
       <div className="container-formulario">
       
          <select 
            className="selector"
            name="generos"
            id="opciones">
                    <option>Seleccione un genero</option>
            <option className="opciones" value="female">
              Female
            </option>
            <option value="male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
          <input className="input" type="submit" value="Enviar" />
      </div>



      <ul>
        {searchResults.map((post) => (
          <div key={post.id} className="container2">
            <div className='contenedor-personajes'>
              <img className='personajes' src={post.image} alt="" />
              <p className='nombres-personajes'>Nombre: {post.name}</p>
              <p className='especie'>Especie: {post.species}</p>
              <p className='genero'>Género: {post.gender}</p>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Characters;
