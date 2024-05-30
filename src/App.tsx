import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Theme } from "./types"; // Импорт интерфейса из types.ts
import "./App.css";

interface Data {
  data: Theme[];
}

function App() {
  const [selectedTheme, setSelectedTheme] = useState<string>("Все темы");
  const [data, setData] = useState<Data | null>(null);

  const handleSelectedTheme = (theme: string) => {
    setSelectedTheme(theme);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://logiclike.com/docs/courses.json"
      );
      const data: Data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      {data ? (
        <Layout
          onSelectedTheme={handleSelectedTheme}
          selectedTheme={selectedTheme}
          data={data}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
