import React from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Лабораторная работа 4.1</h1>
       <p>Обработка событий и валидация формы</p>
       <p className='subtitle'>React и React Native, 5-е издание-Глава 4</p>
      </header>
      <main>
        <RegistrationForm/>
      </main>
      <footer className='App-footer'>
      <p>2026 Студент: Жанель | ID: 15</p>
      <p>Дата выполнения: {new Date().toLocaleDateString('ru-RU')}</p>
      </footer>
    </div>
  );
}

export default App;
