import Badge from '../../../common/badge/badge';
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
				<Badge>Заполните профиль до 12.12.2022</Badge>
				<div className={styles.student_info_container}>
					<p>Дата рождения:</p>
					<p>Телефон:</p>
					<p>Email:</p>
				</div>
				<div className={styles.student_buttons}>
					<button>Отчислить</button>
				</div>
			</div>
		</Card>
	);
};

export default StudentCard;
