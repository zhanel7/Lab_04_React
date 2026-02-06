import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  const styles = {
    articleItem: {
      backgroundColor: 'white',
      border: isHovered ? '2px solid #4299e1' : '2px solid #e2e8f0',
      borderRadius: '12px',
      padding: '25px',
      marginBottom: '20px',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: isHovered 
        ? '0 10px 25px rgba(66, 153, 225, 0.15)' 
        : '0 2px 8px rgba(0, 0, 0, 0.05)',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      overflow: 'hidden'
    },
    articleHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '15px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    titleContainer: {
      flex: 1,
      minWidth: '200px'
    },
    articleTitle: {
      color: '#2d3748',
      textDecoration: 'none',
      fontSize: '22px',
      fontWeight: '700',
      margin: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'color 0.3s'
    },
    articleId: {
      color: '#718096',
      fontSize: '14px',
      backgroundColor: '#edf2f7',
      padding: '4px 12px',
      borderRadius: '20px',
      fontWeight: '600'
    },
    badge: {
      backgroundColor: '#4299e1',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    removeButton: {
      backgroundColor: '#fc8181',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s',
      flexShrink: 0
    },
    toggleButton: {
      backgroundColor: '#4299e1',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s',
      marginTop: '10px'
    },
    articleSummary: {
      marginTop: '20px',
      padding: '25px',
      backgroundColor: '#f7fafc',
      borderRadius: '8px',
      borderLeft: '5px solid #4299e1',
      fontSize: '16px',
      lineHeight: '1.7',
      color: '#4a5568',
      animation: 'fadeIn 0.5s ease',
      textAlign: 'left'
    },
    articleMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid #e2e8f0',
      fontSize: '14px',
      color: '#718096'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    icon: {
      fontSize: '16px'
    }
  };

  const wordCount = article.summary ? article.summary.split(' ').length : 0;
  const charCount = article.summary ? article.summary.length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <li 
      style={styles.articleItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.articleHeader}>
        <div style={styles.titleContainer}>
          <a
            href={`#article-${article.id}`}
            style={styles.articleTitle}
            onClick={handleToggle}
          >
            {article.title}
            <span style={styles.articleId}>#{article.id}</span>
            <span style={styles.badge}>
              {isOpened ? 'Открыта' : 'Закрыта'}
            </span>
          </a>
        </div>
        
        <button
          onClick={() => onClickRemove(article.id)}
          style={styles.removeButton}
          title="Удалить статью"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e53e3e';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#fc8181';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>
      </div>
      
      <button
        onClick={handleToggle}
        style={styles.toggleButton}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#3182ce';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4299e1';
        }}
      >
        {isOpened ? (
          <>
            <span>Скрыть содержание</span>
            <span>▲</span>
          </>
        ) : (
          <>
            <span>Показать содержание</span>
            <span>▼</span>
          </>
        )}
      </button>
      
      {isOpened && (
        <div style={styles.articleSummary}>
          <p>{article.summary}</p>
        </div>
      )}
      
      <div style={styles.articleMeta}>
        <div style={styles.metaItem}>
          <span style={styles.icon}>📊</span>
          <span>{wordCount} слов</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.icon}>⏱️</span>
          <span>Время чтения: {readingTime} мин</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.icon}>🔢</span>
          <span>{charCount} символов</span>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;