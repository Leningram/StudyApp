import { IButton } from './button.types';
import styles from './button.module.scss';

const Button = ({ children, disabled }: IButton) => {
	return (
		<button disabled={disabled} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
