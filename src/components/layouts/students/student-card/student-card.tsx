import Card from '../../../common/card/card';
import styles from './student-card.module.scss';

const StudentCard = () => {
	return (
		<Card>
			<div className={styles.student_container}>
				<div className={styles.student_header}>
					<p className={styles.student_name}>Student Name ASDasdasdasdasdlaksdjlkjdas</p>
					<button>Редактировать</button>
				</div>
				<div>Заполнить анкету до 12.12.2022</div>
			</div>
		</Card>
	);
};

export default StudentCard;
