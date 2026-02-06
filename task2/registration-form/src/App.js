import React, { useState } from 'react';
import RefactoredArticleManager from './RefactoredArticleManager';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('refactored');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Лабораторная работа 4.2</h1>
        <p>Рефакторинг и переиспользуемые компоненты</p>
        <p className="subtitle">React и React Native, 5-е издание - Глава 5</p>
      </header>
      
      <nav className="navigation">
        <div className="nav-buttons">
          <button 
            className={viewMode === 'refactored' ? 'active' : ''}
            onClick={() => setViewMode('refactored')}
          >
            📦 Рефакторизованная версия
          </button>
        </div>
      </nav>
      
      <main>
        {viewMode === 'refactored' && <RefactoredArticleManager />}
      </main>
      
      <footer className="App-footer">
        <p>© 2026 Студент: [Ваше имя] | ID: [Ваш ID]</p>
        <p>Дата выполнения: {new Date().toLocaleDateString('ru-RU')}</p>
      </footer>
    </div>
  );
}

export default App;