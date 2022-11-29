import StudentCard from './student-card/student-card';
import styles from './students.module.scss';

const Students = () => {
	return (
		<div className={styles.students_container}>
			<StudentCard />
		</div>
	);
};

export default Students;
