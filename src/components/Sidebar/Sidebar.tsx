import React from 'react';
import * as styles from './Sidebar.styles'; // Importando os estilos

interface SidebarProps {
  onSelectGeneration: (generation: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectGeneration }) => {
  return (
    <div css={styles.sidebarContainer}>
      <h2>Filtrar por Geração</h2>
      {[...Array(8)].map((_, index) => (
        <button
          key={index}
          css={styles.generationButton}
          onClick={() => onSelectGeneration(index + 1)}
        >
          Geração {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
