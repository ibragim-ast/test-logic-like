import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  image: string;
  bgcolor: string;
}

const Card: React.FC<CardProps> = ({ title, image, bgcolor }) => {
  return (
    <div className={styles.card}>
      <div
        style={{
          backgroundColor: bgcolor,
          borderStartEndRadius: "18px",
          borderStartStartRadius: "18px",
        }}
      >
        <img src={image} />
      </div>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
