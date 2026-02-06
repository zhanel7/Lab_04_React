import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles = [], onClickRemove }) => {
  const styles = {
    container: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      paddingBottom: '15px',
      borderBottom: '2px solid #e2e8f0'
    },
    title: {
      margin: 0,
      color: '#2d3748',
      fontSize: '24px',
      fontWeight: '700'
    },
    stats: {
      backgroundColor: '#ebf8ff',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
      textAlign: 'center'
    },
    statItem: {
      padding: '15px'
    },
    statValue: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#4299e1',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#718096',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    articleList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    emptyState: {
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f7fafc',
      borderRadius: '10px',
      border: '2px dashed #cbd5e0'
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '20px',
      color: '#a0aec0'
    },
    emptyTitle: {
      color: '#4a5568',
      fontSize: '20px',
      marginBottom: '10px'
    },
    emptyText: {
      color: '#718096',
      fontSize: '16px'
    }
  };

  if (articles.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Список статей</h2>
        </div>
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📚</div>
          <h3 style={styles.emptyTitle}>Статей пока нет</h3>
          <p style={styles.emptyText}>
            Добавьте первую статью, используя форму выше
          </p>
        </div>
      </div>
    );
  }

  const totalArticles = articles.length;
  const totalChars = articles.reduce((sum, article) => 
    sum + (article.summary?.length || 0), 0);
  const avgChars = Math.round(totalChars / articles.length);
  const totalWords = articles.reduce((sum, article) => 
    sum + (article.summary?.split(' ').length || 0), 0);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Список статей</h2>
        <div style={{ color: '#718096', fontSize: '14px' }}>
          Последнее обновление: {new Date().toLocaleTimeString('ru-RU')}
        </div>
      </div>
      
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <div style={styles.statValue}>{totalArticles}</div>
          <div style={styles.statLabel}>Всего статей</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>{totalChars}</div>
          <div style={styles.statLabel}>Символов всего</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>{avgChars}</div>
          <div style={styles.statLabel}>Символов в среднем</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>{totalWords}</div>
          <div style={styles.statLabel}>Слов всего</div>
        </div>
      </div>
      
      <ul style={styles.articleList}>
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;