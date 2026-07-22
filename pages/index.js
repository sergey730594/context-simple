export default function Home() {
  return (
    <div style={{
      backgroundColor: '#050816',
      color: 'white',
      minHeight: '100vh',
      padding: '50px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Context Tbilisi
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#00B8D9', marginBottom: '40px' }}>
        AI Growth Agency
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px',
        flexWrap: 'wrap',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <a href="/?lang=ka" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '2px solid #00B8D9',
          borderRadius: '8px'
        }}>ქართული</a>
        
        <a href="/?lang=en" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '2px solid #00B8D9',
          borderRadius: '8px'
        }}>English</a>
        
        <a href="/?lang=ru" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '2px solid #00B8D9',
          borderRadius: '8px'
        }}>Русский</a>
        
        <a href="/?lang=tr" style={{ 
          color: 'white', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '2px solid #00B8D9',
          borderRadius: '8px'
        }}>Türkçe</a>
      </div>
      
      <div style={{ marginTop: '60px', padding: '30px', backgroundColor: '#101827', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '20px' }}>🚀 Сайт успешно работает!</h2>
        <p>Теперь мы добавим сюда:</p>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '20px auto', lineHeight: '2' }}>
          <li>✨ Красивый дизайн</li>
          <li> AI чат-бот</li>
          <li>🧮 Калькулятор стоимости</li>
          <li>📱 Адаптивность для мобильных</li>
        </ul>
      </div>
    </div>
  );
}
