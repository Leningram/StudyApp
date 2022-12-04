import Sidemenu from '@/components/common/sidemenu/sidemenu';
import Students from '@/components/layouts/students';
import styles from './main-layout.module.scss';

const MainLayout = () => {
	return (
		<div className={styles.layout_container}>
			<Sidemenu />
			<Students />
		</div>
	);
};

export default MainLayout;
