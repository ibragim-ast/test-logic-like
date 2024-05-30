import { useState } from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  onSelectedTheme: (theme: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectedTheme }) => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleClick = (index: number, theme: string) => {
    setActiveButton(index);
    onSelectedTheme(theme);
  };

  return (
    <nav className={styles.sidebar}>
      {[
        "Все темы",
        "Логика и мышление",
        "Загадки",
        "Головоломки",
        "Путешествия",
      ].map((theme, index) => (
        <button
          key={index}
          className={activeButton === index ? styles.active : ""}
          onClick={() => handleClick(index, theme)}
        >
          {theme}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
