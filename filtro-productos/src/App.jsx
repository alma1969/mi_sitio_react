 // src/App.jsx
 import { useState } from 'react';
 import styles from './App.module.css';
 import { Filters } from './components/Filters/Filters.jsx';
 function App() {
 const [selectedFilter, setSelectedFilter] = useState('todos');
 const handleFilterSelect = (filter) => {
 setSelectedFilter(filter);
 };
 const getImageCount = () => {
 switch (selectedFilter) {
 case 'ropa':
 return 6;
 case 'electronica':
 return 2;
 default:
 return 8;
 }
 };
 const imageCount = getImageCount();
 const imageUrls = Array.from({ length: imageCount }, (_, i) => `https://nao.com.mx/cdn/shop/products/20_1-800x800.jpg?v=1606171510${i + 1}`);
 return (
 <div className={styles.appContainer}>
 <h1 className={styles.title}>Catálogo de Productos</h1>
 <Filters onFilterSelect={handleFilterSelect} />
 <div className={styles.imageGrid}>
 {imageUrls.map((url, i) => (
 <img key={i} src={url} alt={`Imagen ${i + 1}`} className={styles.imageItem} 
/>
 ))}
 </div>
 </div>
 );
 }
 export default App;