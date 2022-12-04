import Button from '@/components/common/button/button';
import Badge from '@/components/common/badge/badge';
import Card from '@/components/common/card/card';
import styles from './student-card.module.scss';

const StudentCard = () => {
	return (
		<Card>
			<div className={styles.student_container}>
				<div className={styles.student_header}>
					<p className={styles.student_name}>Student Name ASDasdasdasdasdlaksdjlkjdas</p>
					<Button>Редактировать</Button>
				</div>
				<Badge>
					<p className={styles.student_status}>Заполните профиль до 12.12.2022</p>
				</Badge>
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
