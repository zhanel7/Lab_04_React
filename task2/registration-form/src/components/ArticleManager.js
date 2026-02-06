import React, { useState } from 'react';

const ArticleManager = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Введение в React', summary: 'React - JavaScript библиотека.', display: 'none' },
    { id: 2, title: 'Компоненты в React', summary: 'Компоненты - строительные блоки.', display: 'none' },
    { id: 3, title: 'Хуки в React', summary: 'Хуки позволяют использовать состояние.', display: 'none' }
  ]);
  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  
  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) return;
    
    const newArticle = {
      id: articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1,
      title: title.trim(),
      summary: summary.trim(),
      display: 'none'
    };
    
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };
  
  const onClickRemove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };
  
  const onClickToggle = (id) => {
    setArticles(articles.map(article => {
      if (article.id === id) {
        return {
          ...article,
          display: article.display === 'none' ? 'block' : 'none'
        };
      }
      return article;
    }));
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Монолитный менеджер статей</h1>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" />
        <input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Содержание" />
        <button onClick={onClickAdd}>Добавить</button>
      </div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <a href="#" onClick={() => onClickToggle(article.id)}>{article.title}</a>
            <button onClick={() => onClickRemove(article.id)}>×</button>
            <p style={{ display: article.display }}>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleManager;