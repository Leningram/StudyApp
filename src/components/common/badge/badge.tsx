import styles from './badge.module.scss';
import { IBadge } from './badge.types';

const Badge = ({ children }: IBadge) => {
	return <div className={styles.badge}>{children}</div>;
};

export default Badge;
