import styles from '../styles/Home.module.css';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';

export default function Home() {
return (
	<>
		<Navbar/>

		<main>
			<ProjectList/>
		</main>

		<footer className={styles.head_foot} id={styles.footer}>
		</footer>
	</>
	)
}
