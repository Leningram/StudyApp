import StudentCard from './student-card/student-card';
import styles from './students.module.scss';

const Students = () => {
	return (
		<div className={styles.students_container}>
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
			<StudentCard />
		</div>
	);
};

export default Students;
