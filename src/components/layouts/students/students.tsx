import StudentCard from './student-card/student-card';
import styles from './students.module.scss';

const Students = () => {
	return (
		<div className={styles.layout_wrapper}>
			<div className={styles.students_container}>
				<StudentCard />
				<StudentCard />
				<StudentCard />
				<StudentCard />
				<StudentCard />
			</div>
		</div>
	);
};

export default Students;
