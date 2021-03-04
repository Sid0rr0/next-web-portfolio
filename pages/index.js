import styles from '../styles/Home.module.css'
import ProjectList from '../Components/ProjectList'	

export default function Home() {
return (
	<>
		<header className={styles.head_foot} id={styles.header}>
			<a hraf="#">L&#234; Th&#7883; Ho&#224;i</a>
			<a href="#">info</a>
		</header>

		<main>
			<ProjectList/>
		</main>

		<footer className={styles.head_foot} id={styles.footer}>
		</footer>
	</>
	)
}
