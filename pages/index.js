import styles from '../styles/Home.module.css';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';
import { fetchAPI } from "../lib/api";

export default function Home({ projects, about }) {

	//console.log({projects, about})

	return (
		<>
			<Navbar about={about} />

			<main>
				<ProjectList projects={projects} />
			</main>

			<footer className={styles.head_foot} id={styles.footer}>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const projects = await fetchAPI("/projects");
	const about = await fetchAPI("/about");

  return {
	  props: { projects, about },
  };
}
