import styles from './card.module.scss';
import { ICard } from './card.types';

const Card = ({children}: ICard) => {
  return <div className={styles.card_wrapper}>
    {children}
  </div>;
};

export default Card;
