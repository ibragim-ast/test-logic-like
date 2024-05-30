import Card from "../Card/Card";
import { Theme } from "../../types";
import styles from "./Main.module.scss";

interface MainProps {
  data: { theme: Theme[] };
  selectedTheme: string;
}
const Main: React.FC<MainProps> = ({ data, selectedTheme }) => {
  const filteredThemes = data.filter((theme) => {
    if (selectedTheme === "Все темы") {
      return true;
    } else if (selectedTheme === "Путешествия") {
      return theme.tags.includes("Страны и столицы");
    } else {
      return theme.tags.includes(selectedTheme);
    }
  });

  return (
    <div className={styles.main}>
      {filteredThemes.map((theme) => (
        <Card
          key={theme.id}
          title={theme.name}
          image={theme.image}
          bgcolor={theme.bgColor}
        />
      ))}
    </div>
  );
};

export default Main;
