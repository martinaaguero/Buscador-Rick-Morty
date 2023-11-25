import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './characters.css';

function Characters() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos: ', error);
      });
  }, []);

  // función para los resultados de la búsqueda
  const handleSearch = (searchTerm) => {
    const filteredResults = posts.filter((post) =>
      post.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // filtrar x género
    let resultsByGender = filteredResults;

    if (selectedGender) {
      resultsByGender = filteredResults.filter((post) =>
        post.gender.toLowerCase() === selectedGender.toLowerCase()
      );
    }

    setSearchResults(resultsByGender);
  };


  return (
    <>
      <Search onSearch={handleSearch} />

      {/* HTML DEL SELECTOR POR GÉNERO */}
      <div className="container-formulario">
        <select
          className="selector"
          name="generos"
          id="opciones"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option>Seleccione un género</option>
          <option className="opciones" value="female">
            Femenino
          </option>
          <option value="male">Masculino</option>
          <option value="unknown">Desconocido</option>
        </select>
        <input className="input" type="submit" value="Filtrar" />
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
