import React, { useState } from 'react';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

const RefactoredArticleManager = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Введение в React',
      summary: 'React - это декларативная, эффективная и гибкая JavaScript библиотека для создания пользовательских интерфейсов. Она позволяет создавать сложные UI из небольших и изолированных фрагментов кода, называемых компонентами.'
    },
    {
      id: 2,
      title: 'Компоненты и пропсы',
      summary: 'Компоненты позволяют разбить интерфейс на независимые, переиспользуемые части и работать с каждой из них отдельно. Пропсы (props) - это входные данные для компонентов, передаваемые от родительских компонентов.'
    },
    {
      id: 3,
      title: 'Состояние и жизненный цикл',
      summary: 'Состояние (state) позволяет компонентам React реагировать на действия пользователя, ответы сервера и другие события, и отображать это в UI. Хуки, такие как useState и useEffect, упрощают работу с состоянием.'
    }
  ]);
  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  
  const handleAddArticle = () => {
    if (!title.trim() || !summary.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    
    const newId = articles.length > 0 
      ? Math.max(...articles.map(a => a.id)) + 1 
      : 1;
    
    const newArticle = {
      id: newId,
      title: title.trim(),
      summary: summary.trim()
    };
    
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };
  
  const handleRemoveArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: "'Inter', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      paddingBottom: '20px',
      borderBottom: '3px solid #e2e8f0'
    },
    mainTitle: {
      color: '#2d3748',
      fontSize: '36px',
      fontWeight: '800',
      marginBottom: '10px',
      background: 'linear-gradient(135deg, #4299e1 0%, #38a169 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      color: '#718096',
      fontSize: '18px',
      marginBottom: '20px'
    },
    componentsInfo: {
      backgroundColor: '#f7fafc',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      border: '1px solid #cbd5e0'
    },
    infoTitle: {
      color: '#2d3748',
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '15px'
    },
    componentList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '15px'
    },
    componentItem: {
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      textAlign: 'center'
    },
    componentName: {
      color: '#4299e1',
      fontWeight: '600',
      marginBottom: '5px'
    },
    componentDesc: {
      color: '#718096',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Управление статьями</h1>
        <p style={styles.subtitle}>
          Рефакторинг монолитного компонента на переиспользуемые компоненты
        </p>
      </header>
      
      <div style={styles.componentsInfo}>
        <h3 style={styles.infoTitle}>Используемые компоненты (Глава 5):</h3>
        <div style={styles.componentList}>
          <div style={styles.componentItem}>
            <div style={styles.componentName}>AddArticle</div>
            <div style={styles.componentDesc}>Форма добавления новых статей</div>
          </div>
          <div style={styles.componentItem}>
            <div style={styles.componentName}>ArticleList</div>
            <div style={styles.componentDesc}>Контейнер для списка статей</div>
          </div>
          <div style={styles.componentItem}>
            <div style={styles.componentName}>ArticleItem</div>
            <div style={styles.componentDesc}>Отдельная статья со своим состоянием</div>
          </div>
        </div>
      </div>
      
      <AddArticle
        name="Добавление статьи"
        title={title}
        summary={summary}
        onChangeTitle={handleTitleChange}
        onChangeSummary={handleSummaryChange}
        onClickAdd={handleAddArticle}
      />
      
      <ArticleList
        articles={articles}
        onClickRemove={handleRemoveArticle}
      />
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#e6fffa',
        borderRadius: '10px',
        border: '1px solid #81e6d9'
      }}>
        <h4 style={{ color: '#234e52', marginBottom: '10px' }}>
          📘 Принципы рефакторинга (Глава 5):
        </h4>
        <ul style={{ color: '#2d3748', lineHeight: '1.7' }}>
          <li><strong>Разделение ответственности</strong> - каждый компонент выполняет одну задачу</li>
          <li><strong>Переиспользование</strong> - компоненты независимы и могут использоваться в других проектах</li>
          <li><strong>Локальное состояние</strong> - ArticleItem управляет своим собственным состоянием отображения</li>
          <li><strong>Пропсы для коммуникации</strong> - передача данных и обработчиков через props</li>
        </ul>
      </div>
    </div>
  );
};

export default RefactoredArticleManager;