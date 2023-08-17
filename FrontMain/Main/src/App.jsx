import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  const [cardVisible, setCardVisible] = useState(false);
  const [nameError, setNameError] = useState('');
  const [animalError, setAnimalError] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
  
    setName(newName);
    setNameError('');
  
    if (newName.length > 0 && newName.length < 3) {
      setNameError('El nombre debe tener al menos 3 caracteres.');
    }
  
    setCardVisible(false);
  };

  const handleAnimalChange = (event) => {
    const newAnimal = event.target.value;
  
    setFavoriteAnimal(newAnimal);
    setAnimalError('');
  
    if (newAnimal.length > 0 && newAnimal.length < 6) {
      setAnimalError('El animal favorito debe tener al menos 6 caracteres.');
    }
  
    setCardVisible(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    setNameError('');
    setAnimalError('');
  
    if (!name || !favoriteAnimal) {
      if (!name) setNameError('Por favor, ingresa tu nombre.');
      if (!favoriteAnimal) setAnimalError('Por favor, ingresa tu animal favorito.');
      setCardVisible(false);
      return;
    }
  
    if ((name.length >= 3 && name.trim() === name) && favoriteAnimal.length >= 6) {
      setCardVisible(true);
    } else {
      setCardVisible(false);
    }
  };

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Ingrese su animal favorito</h1>
      </header>
      <div className='form-container'>
        <div className='input-group'>
          <label>Nombre:</label>
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            className='input-field'
          />
          {nameError && (
            <div className='error-message'>
              <p>{nameError}</p>
            </div>
          )}
        </div>
        <div className='input-group'>
          <label>Animal Favorito:</label>
          <input
            type='text'
            value={favoriteAnimal}
            onChange={handleAnimalChange}
            className='input-field'
          />
          {animalError && (
            <div className='error-message'>
              <p>{animalError}</p>
            </div>
          )}
        </div>
        <button onClick={handleFormSubmit} className='submit-button'>Enviar</button>
      </div>

      {cardVisible && (
        <div className='card'>
          <h2>Hola {name}, tu animal favorito es {favoriteAnimal}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
