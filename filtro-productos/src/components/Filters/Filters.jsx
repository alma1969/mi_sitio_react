// src/components/Filters.jsx
 import styles from './Filters.module.css';
 export function Filters({ onFilterSelect }) {
   return (
     <div className={styles.filterContainer}>
        <button className={styles.filterButton} onClick={() => onFilterSelect('todos')}>Todos</button>
        <button className={styles.filterButton} onClick={() => onFilterSelect('ropa')}>Ropa</button>
        <button className={styles.filterButton} onClick={() => onFilterSelect('electronica')}>Electrónica</button>
     </div>
   );
 }