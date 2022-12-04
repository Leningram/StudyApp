import styles from './sidemenu.module.scss';
import { StudentsIcon, ProfileIcon } from '@/assets/icons';

const Sidemenu = () => {
	return (
		<div className={styles.sidemenu_container}>
			<ul className={styles.menu}>
				<li className={styles.menu_item}>
					<StudentsIcon />
					<p>Students</p>
				</li>
				<li className={styles.menu_item}>
					<ProfileIcon />
					<p>Profile</p>
				</li>
				<li className={styles.menu_item}>
					<p>Logout</p>
				</li>
			</ul>
		</div>
	);
};

export default Sidemenu;
