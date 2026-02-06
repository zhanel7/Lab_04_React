import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    age: false
  });

  const validateName = (name) => {
    if (!name.trim()) return 'Имя обязательно для заполнения';
    if (name.trim().length < 2) return 'Имя должно содержать минимум 2 символа';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email обязателен для заполнения';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Введите корректный email адрес';
    return '';
  };

  const validateAge = (age) => {
    if (!age.trim()) return 'Возраст обязателен для заполнения';
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum)) return 'Возраст должен быть числом';
    if (ageNum < 18) return 'Возраст должен быть 18 лет или больше';
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  // ИСПРАВЛЕНО: убрал switch и использовал if-else
  const validateField = (fieldName, value) => {
    let error = '';
    
    if (fieldName === 'name') {
      error = validateName(value);
    } else if (fieldName === 'email') {
      error = validateEmail(value);
    } else if (fieldName === 'age') {
      error = validateAge(value);
    }
    // Убрал default case, так как у нас только 3 поля
    
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Помечаем все поля как "тронутые" для показа ошибок
    Object.keys(formData).forEach(field => {
      setTouched(prev => ({ ...prev, [field]: true }));
      validateField(field, formData[field]);
    });
    
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const ageError = validateAge(formData.age);
    
    setErrors({
      name: nameError,
      email: emailError,
      age: ageError
    });
    
    if (!nameError && !emailError && !ageError) {
      setIsSubmitted(true);
      
      // Очищаем форму через 3 секунды
      setTimeout(() => {
        setFormData({ name: '', email: '', age: '' });
        setTouched({ name: false, email: false, age: false });
        setErrors({ name: '', email: '', age: '' });
        setIsSubmitted(false);
      }, 3000);
      
      // Логируем успешную отправку
      console.log('Форма отправлена успешно:', formData);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', age: '' });
    setErrors({ name: '', email: '', age: '' });
    setTouched({ name: false, email: false, age: false });
    setIsSubmitted(false);
  };

  // Стили для компонента
  const styles = {
    container: {
      maxWidth: '500px',
      width: '100%',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    },
    title: {
      textAlign: 'center',
      color: '#2d3748',
      marginBottom: '30px',
      fontSize: '24px',
      fontWeight: '600',
      borderBottom: '2px solid #4299e1',
      paddingBottom: '10px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px'
    },
    inputGroup: {
      position: 'relative'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#4a5568'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'all 0.3s',
      outline: 'none'
    },
    error: {
      color: '#e53e3e',
      fontSize: '14px',
      marginTop: '6px',
      minHeight: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      marginTop: '10px'
    },
    submitButton: {
      flex: 2,
      padding: '14px 20px',
      backgroundColor: '#4299e1',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    resetButton: {
      flex: 1,
      padding: '14px 20px',
      backgroundColor: '#718096',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    successMessage: {
      backgroundColor: '#c6f6d5',
      color: '#22543d',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
      textAlign: 'center',
      border: '1px solid #9ae6b4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    validationRules: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#ebf8ff',
      borderRadius: '8px',
      border: '1px solid #bee3f8'
    },
    rulesTitle: {
      color: '#2c5282',
      marginBottom: '10px',
      fontSize: '16px',
      fontWeight: '600'
    },
    ruleList: {
      listStyleType: 'none',
      paddingLeft: '0'
    },
    ruleItem: {
      marginBottom: '8px',
      fontSize: '14px',
      color: '#4a5568',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Форма регистрации пользователя</h2>
      
      {isSubmitted && (
        <div style={styles.successMessage}>
          <span style={{ fontSize: '20px' }}>✅</span>
          <div>
            <strong>Успешно!</strong>
            <div>Регистрация завершена. Форма будет очищена через 3 секунды.</div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        {/* Поле: Имя */}
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Полное имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Иван Иванов"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={{
              ...styles.input,
              borderColor: errors.name ? '#e53e3e' : 
                         touched.name && !errors.name ? '#48bb78' : '#e2e8f0'
            }}
            required
          />
          {errors.name && (
            <div style={styles.error}>
              <span>⚠️</span>
              {errors.name}
            </div>
          )}
        </div>
        
        {/* Поле: Email */}
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email адрес *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ivan@example.com"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={{
              ...styles.input,
              borderColor: errors.email ? '#e53e3e' : 
                         touched.email && !errors.email ? '#48bb78' : '#e2e8f0'
            }}
            required
          />
          {errors.email && (
            <div style={styles.error}>
              <span>⚠️</span>
              {errors.email}
            </div>
          )}
        </div>
        
        {/* Поле: Возраст */}
        <div style={styles.inputGroup}>
          <label htmlFor="age" style={styles.label}>
            Возраст *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="18"
            value={formData.age}
            onChange={handleInputChange}
            onBlur={handleBlur}
            min="0"
            max="120"
            style={{
              ...styles.input,
              borderColor: errors.age ? '#e53e3e' : 
                         touched.age && !errors.age ? '#48bb78' : '#e2e8f0'
            }}
            required
          />
          {errors.age && (
            <div style={styles.error}>
              <span>⚠️</span>
              {errors.age}
            </div>
          )}
        </div>
        
        {/* Кнопки */}
        <div style={styles.buttonGroup}>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3182ce'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4299e1'}
          >
            Зарегистрироваться
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            style={styles.resetButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4a5568'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#718096'}
          >
            Сбросить
          </button>
        </div>
      </form>
      
      {/* Правила валидации */}
      <div style={styles.validationRules}>
        <h4 style={styles.rulesTitle}>Правила валидации:</h4>
        <ul style={styles.ruleList}>
          <li style={styles.ruleItem}>
            <span style={{ color: '#4299e1' }}>•</span>
            <strong>Имя:</strong> обязательно для заполнения, минимум 2 символа
          </li>
          <li style={styles.ruleItem}>
            <span style={{ color: '#4299e1' }}>•</span>
            <strong>Email:</strong> обязателен, должен быть в формате user@domain.com
          </li>
          <li style={styles.ruleItem}>
            <span style={{ color: '#4299e1' }}>•</span>
            <strong>Возраст:</strong> обязателен, должен быть числом ≥ 18
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegistrationForm;