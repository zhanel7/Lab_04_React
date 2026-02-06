import React from 'react';

const AddArticle = ({ 
  name = "Статьи", 
  title, 
  summary, 
  onChangeTitle, 
  onChangeSummary, 
  onClickAdd 
}) => {
  const styles = {
    section: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px',
      marginBottom: '30px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    title: {
      marginTop: 0,
      marginBottom: '25px',
      color: '#2d3748',
      fontSize: '28px',
      fontWeight: '700',
      textAlign: 'center',
      borderBottom: '3px solid #4299e1',
      paddingBottom: '15px'
    },
    inputGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: '600',
      color: '#4a5568',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'all 0.3s',
      outline: 'none',
      fontFamily: 'inherit'
    },
    button: {
      backgroundColor: '#38a169',
      color: 'white',
      padding: '16px 32px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      width: '100%',
      transition: 'all 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    counter: {
      textAlign: 'right',
      fontSize: '14px',
      color: '#718096',
      marginTop: '5px'
    }
  };
  
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Добавить новую статью</h2>
      
      <div style={styles.inputGroup}>
        <label htmlFor="article-title" style={styles.label}>
          Заголовок статьи
        </label>
        <input
          type="text"
          id="article-title"
          placeholder="Например: Введение в React Hooks"
          value={title}
          onChange={onChangeTitle}
          style={{
            ...styles.input,
            borderColor: title ? '#38a169' : '#e2e8f0'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#4299e1';
            e.target.style.boxShadow = '0 0 0 3px rgba(66, 153, 225, 0.2)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = title ? '#38a169' : '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }}
        />
        <div style={styles.counter}>
          {title.length}/100 символов
        </div>
      </div>
      
      <div style={styles.inputGroup}>
        <label htmlFor="article-summary" style={styles.label}>
          Содержание статьи
        </label>
        <input
          type="text"
          id="article-summary"
          placeholder="Например: React Hooks позволяют использовать состояние..."
          value={summary}
          onChange={onChangeSummary}
          style={{
            ...styles.input,
            borderColor: summary ? '#38a169' : '#e2e8f0'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#4299e1';
            e.target.style.boxShadow = '0 0 0 3px rgba(66, 153, 225, 0.2)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = summary ? '#38a169' : '#e2e8f0';
            e.target.style.boxShadow = 'none';
          }}
        />
        <div style={styles.counter}>
          {summary.length}/500 символов
        </div>
      </div>
      
      <button
        onClick={onClickAdd}
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2f855a';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 12px rgba(56, 161, 105, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#38a169';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
        disabled={!title.trim() || !summary.trim()}
      >
        📝 Добавить статью
      </button>
    </section>
  );
};

export default AddArticle;