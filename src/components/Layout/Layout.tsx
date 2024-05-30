import Sidebar from "../Sidebar/Sidebar";
import { Theme } from "../../types"; // Импорт интерфейса из types.ts
import Main from "../Main/Main";
import styles from "./Layout.module.scss";

interface LayoutProps {
  data: { data: Theme[] };
  selectedTheme: string;
  onSelectedTheme: (selectedTheme: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  data,
  selectedTheme,
  onSelectedTheme,
}) => {
  return (
    <div className={styles.layout}>
      <Sidebar onSelectedTheme={onSelectedTheme} />
      <Main data={data} selectedTheme={selectedTheme} />
    </div>
  );
};

export default Layout;
